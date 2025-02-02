import React, { useState, useEffect } from "react";
import "/src/assets/css/Dashboard.css";
import { useNavigate } from "react-router-dom";

const DataTable = ({ data, parentName }) => {
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
  const [filteredRows, setFilteredRows] = useState([]); // State to store filtered rows
  const [actionMenu, setActionMenu] = useState(null); // State to handle action menu visibility

  const navigate = useNavigate();

  // Sync filteredRows with data.rows on data change
  useEffect(() => {
    setFilteredRows(data.rows || []);
  }, [data.rows]);

  // Handle search query change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter rows based on the search query
    const filtered = data.rows.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(query)
      )
    );
    setFilteredRows(filtered);
  };

  const handleActionClick = (rowIndex) => {
    setActionMenu((prevState) => (prevState === rowIndex ? null : rowIndex));
  };

  const handleAction = (action, row) => {
    setActionMenu(null);

    // Perform navigation based on the action
    switch (action) {
      case "Add IPD":
        navigate("/dashboard/ipd-entries/add", { state: { casePaperId: row.casePaperId } });
        break;
      case "Add OPD":
        navigate("/dashboard/opd-entries/add", { state: { casePaperId: row.casePaperId } });
        break;
      case "Print Bill":
        navigate("/dashboard/billing/", { state: { ipdId: row.ipdId, casePaperId: row.casePaperId } });
        break;
      case "Add Items for IPD":
        navigate("/dashboard/consumed-items/add", {
          state: { ipdId: row.ipdId},
        });
        break;
      case "Add Items for OPD":
        navigate("/dashboard/consumed-items/add", {
          state: { opdId:row.opdId },
        });
        break;
      case "Update IPD":
          navigate("/dashboard/ipd-entries/add", 
            { state: { ipdData: row } },
          );
          break;
      case "Update OPD":
        navigate("/dashboard/opd-entries/add", 
          { state: { opdData: row } },
        );
        break;
      default:
        console.warn("Unknown action:", action);
    }
  };

  if (!data || !data.headers || !data.rows) {
    return <p>No data available</p>;
  }

  return (
    <div className = {parentName===undefined? "recent_order":"recent_order_dashboard"}>
      {/* Search Bar */}
      <div
        style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          style={{
            padding: "8px",
            fontSize: "14px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "300px",
          }}
        />
      </div>

      <table>
        <thead>
          <tr>
            {data.headers.map((header) => (
              <th key={header.key}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredRows.length > 0 ? (
            filteredRows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {data.headers.map((header) => (
                  <td key={header.key}>
                    {header.key === "actions" ? (
                      <div style={{ position: "relative" }}>
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => handleActionClick(rowIndex)}
                        >
                          ⋮ {/* Unicode for three dots */}
                        </span>

                        {actionMenu === rowIndex && (
                          <div
                            style={{
                              position: "absolute",
                              top: "20px",
                              right: "0",
                              backgroundColor: "white",
                              border: "1px solid #ccc",
                              borderRadius: "4px",
                              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                              zIndex: 10,
                            }}
                          >
                            {row.actions.map((action, actionIndex) => (
                              <div
                                key={actionIndex}
                                style={{
                                  padding: "8px",
                                  cursor: "pointer",
                                  borderBottom:
                                    actionIndex === row.actions.length - 1
                                      ? "none"
                                      : "1px solid #eee",
                                }}
                                onClick={() => handleAction(action, row)}
                              >
                                {action}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      row[header.key]
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={data.headers.length} style={{ textAlign: "center" }}>
                No matching records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
