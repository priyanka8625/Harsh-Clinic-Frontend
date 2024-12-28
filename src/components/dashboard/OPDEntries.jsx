import React from 'react';
import '/src/assets/css/Dashboard.css';
import DataTable from '../reusable/DataTable';
import { useNavigate } from 'react-router-dom';


const OPDEntries = () => { 
    const opdData = {
        headers: [
            { key: 'opdId', label: 'OPD ID' },
            { key: 'casePaperId', label: 'Case Paper ID' },
            { key: 'opdDate', label: 'OPD Date' },
            { key: 'amount', label: 'Amount' },
            { key: 'notes', label: 'Notes' },
            { key: 'creationDate', label: 'Creation Date' },
            { key: 'adminId', label: 'Admin ID' },
          ],
          rows: [
            {
              opdId: 201,
              casePaperId: 101,
              opdDate: '10/12/2024',
              amount: 500,
              notes: 'Consultation for fever',
              creationDate: '10/12/2024',
              adminId: 1,
            },
            {
              opdId: 202,
              casePaperId: 102,
              opdDate: '11/12/2024',
              amount: 750,
              notes: 'Routine check-up',
              creationDate: '11/12/2024',
              adminId: 2,
            },
            {
              opdId: 203,
              casePaperId: 103,
              opdDate: '12/12/2024',
              amount: 1000,
              notes: 'Consultation for knee pain',
              creationDate: '12/12/2024',
              adminId: 3,
            },
            {
              opdId: 204,
              casePaperId: 104,
              opdDate: '13/12/2024',
              amount: 600,
              notes: 'Consultation for skin rash',
              creationDate: '13/12/2024',
              adminId: 1,
            },
            {
              opdId: 205,
              casePaperId: 105,
              opdDate: '14/12/2024',
              amount: 800,
              notes: 'General check-up',
              creationDate: '14/12/2024',
              adminId: 2,
            },
          ],
    };

    const navigate = useNavigate();
      const handleOnClick = ()=>{
        navigate('/dashboard/opd-entries/add');
      }


    return (
        <>
            <h1>OPD Entries Section</h1>
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
            <DataTable data={opdData} />
        </>
    );
}

export default OPDEntries;
