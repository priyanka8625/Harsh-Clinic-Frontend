import React from 'react';
import '/src/assets/css/Dashboard.css';
import { useNavigate } from 'react-router-dom';

const DataTable = ({ data }) => {
  if (!data || !data.headers || !data.rows) {
    return <p>No data available</p>;
  }

  const navigate = useNavigate();

  const handlePrintBill = (row) => {
    console.log(row.ipdId); // Log the IPD ID for debugging
    navigate('/dashboard/billing/', { state: { ipdId: row.ipdId } }); // Pass the IPD ID via state
  }

  return (
    <div className="recent_order">
      <table>
        <thead>
          <tr>
            {data.headers.map((header) => (
              <th key={header.key}>{header.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {data.headers.map((header) => (
                <td key={header.key}>
                  {header.key === 'actions' ? (
                    <span
                      className="primary"
                      style={{ cursor: 'pointer', color: 'blue' }}
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
