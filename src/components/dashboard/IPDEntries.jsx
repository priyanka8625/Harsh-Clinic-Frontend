import React from 'react';
import '/src/assets/css/Dashboard.css';
import DataTable from '../reusable/DataTable';
import { useNavigate } from 'react-router-dom';


const IPDEntries = () => { 
    
  const ipdData = {
    headers: [
      { key: 'ipdId', label: 'IPD ID' },
      { key: 'casePaperId', label: 'CASE PAPER ID' },
      { key: 'admissionDate', label: 'Admission Date' },
      { key: 'dischargeDate', label: 'Discharge Date' },
      { key: 'amount', label: 'Amount' },
      { key: 'notes', label: 'Notes' },
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
        notes: 'Consultation for fever',
        adminId: 101,
        addedOn: '08/12/2024',
        actions: ['Update IPD', 'Add Items for IPD', 'Print Bill'],
      },
      {
        ipdId: 2,
        casePaperId: 2,
        admissionDate: '09/12/2024',
        dischargeDate: '15/12/2024',
        amount: 3000,
        notes: 'Consultation for fever',
        adminId: 102,
        addedOn: '09/12/2024',
        actions: ['Update IPD', 'Add Items for IPD', 'Print Bill'],
      },
      {
        ipdId: 3,
        casePaperId: 3,
        admissionDate: '10/12/2024',
        dischargeDate: '16/12/2024',
        amount: 2500,
        notes: 'Consultation for fever',
        adminId: 103,
        addedOn: '10/12/2024',
        actions: ['Update IPD', 'Add Items for IPD', 'Print Bill'],
      },
    ],
  };
  

      const navigate = useNavigate();
      const handleOnClick = ()=>{
        navigate('/dashboard/ipd-entries/add');
      }

    return (
        <>
            <h1>IPD Entries Section</h1>
            <button
          style={{
            marginTop: '30px',
            marginLeft: '30px',
            padding: '10px 20px',
            border: '1px solid #6C63FE',
            backgroundColor: '#6C63FE',
            color: '#fff',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            borderRadius: '5px',
            fontSize: '16px',
            fontStyle: 'bold'
          }}
        onClick={handleOnClick}
        >
          Add record
        </button>
        <DataTable data={ipdData} />
        </>
    );
}

export default IPDEntries;
