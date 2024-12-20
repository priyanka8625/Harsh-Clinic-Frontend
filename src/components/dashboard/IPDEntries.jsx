import React from 'react';
import '/src/assets/css/Dashboard.css';
import DataTable from '../reusable/DataTable';


const IPDEntries = () => { 
    const ipdData = {
        headers: [
            { key: 'ipdId', label: 'IPD ID' },
            { key: 'casePaperId', label: 'CASE PAPER ID' },
            { key: 'admissionDate', label: 'Admission Date' },
            { key: 'dischargeDate', label: 'Discharge Date' },
            { key: 'amount', label: 'Amount' },
            { key: 'adminId', label: 'ADMIN ID' },
            { key: 'addedOn', label: 'Added On' },
            { key: 'actions', label: '' },
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
        <>
            <h1>IPD Entries Section</h1>
            <DataTable data={ipdData} />
        </>
    );
}

export default IPDEntries;
