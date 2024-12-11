import React from 'react';
import '/src/assets/css/Dashboard.css';


const DataTable = () => {
  // Mock data for recent orders with headers
  const data = {
    headers: [
      { key: 'ipdId', label: 'IPD ID' },
      { key: 'casePaperId', label: 'CASE PAPER ID' },
      { key: 'admissionDate', label: 'Admission Date' },
      { key: 'dischargeDate', label: 'Discharge Date' },
      { key: 'amount', label: 'Amount' },
      { key: 'adminId', label: 'ADMIN ID' },
      { key: 'addedOn', label: 'Added On' },
      { key: 'actions', label: 'Actions' },
    ],
    rows: [
      {
        ipdId: 1,
        casePaperId: 1,
        admissionDate: '08/12/2024',
        dischargeDate: '12/12/2024',
        amount: 2000,
        adminId: 101,
        addedOn: '08/12/2024',
      },
      {
        ipdId: 2,
        casePaperId: 2,
        admissionDate: '09/12/2024',
        dischargeDate: '15/12/2024',
        amount: 3000,
        adminId: 102,
        addedOn: '09/12/2024',
      },
      {
        ipdId: 3,
        casePaperId: 3,
        admissionDate: '10/12/2024',
        dischargeDate: '16/12/2024',
        amount: 2500,
        adminId: 103,
        addedOn: '10/12/2024',
      },
    ],
  };

  return (
    <div className="recent_order">
      <h2>IPD Entries</h2>
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
                      onClick={() => alert(`Viewing details for IPD ID: ${row.ipdId}`)}
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
      <a href="#">Show All</a>
    </div>
  );
};

export default DataTable;
