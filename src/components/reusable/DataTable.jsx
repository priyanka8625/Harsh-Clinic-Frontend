import React, { useState } from "react";
import "/src/assets/css/Dashboard.css";
import { useNavigate } from "react-router-dom";

const DataTable = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
  const [filteredRows, setFilteredRows] = useState(data.rows); // State to store filtered rows

  const navigate = useNavigate();

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

  const handlePrintBill = (row) => {
    console.log(row.ipdId); // Log the IPD ID for debugging
    navigate('/dashboard/billing/', { state: { ipdId: row.ipdId } }); // Pass the IPD ID via state
  };

  if (!data || !data.headers || !data.rows) {
    return <p>No data available</p>;
  }

  return (
    <div className="recent_order">
      {/* Search Bar */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10px" }}>
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
                      <span
                        className="primary"
                        style={{ cursor: "pointer", color: "blue" }}
                        onClick={() => handlePrintBill(row)}
                      >
                        Print bill
                      </span>
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
