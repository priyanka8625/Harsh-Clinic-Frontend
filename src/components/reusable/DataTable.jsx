import React from 'react';
import '/src/assets/css/Dashboard.css';

const DataTable = ({ data }) => {
  if (!data || !data.headers || !data.rows) {
    return <p>No data available</p>;
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
                      onClick={() => alert(`Viewing details for ID: ${row[data.headers[0].key]}`)}
                    >
                      Details
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
