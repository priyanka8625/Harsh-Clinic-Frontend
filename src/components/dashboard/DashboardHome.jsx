import React, { useState } from 'react';
import InsightCards from '../reusable/InsightCards';
import DataTable from '../reusable/DataTable';
import '/src/assets/css/Dashboard.css';

const DashboardHome = () => {
  const [selectedOption, setSelectedOption] = useState('ipd');

  const tableData = {
    ipd: {
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
    },
    opd: {
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
    },
  };

  return (
    <>
      <h1>Dashboard</h1>
      <h3>Select start and end date</h3>
      <div className="date">
        <input type="date" />
        <input type="date" />
      </div>
      <InsightCards />
      
      <div>
        <button
          style={{
            marginTop: '30px',
            marginLeft: '30px',
            padding: '10px 20px',
            border: '1px solid #6C63FE',
            backgroundColor: selectedOption === 'ipd' ? '#6C63FE' : '#f0f0f0',
            color: selectedOption === 'ipd' ? '#fff' : '#000',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            borderRadius: '5px',
          }}
          onClick={() => setSelectedOption('ipd')}
        >
          IPD Entries
        </button>
        <button
          style={{
            marginTop: '30px',
            marginLeft: '30px',
            padding: '10px 20px',
            border: '1px solid #6C63FE',
            backgroundColor: selectedOption === 'opd' ? '#6C63FE' : '#f0f0f0',
            color: selectedOption === 'opd' ? '#fff' : '#000',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            borderRadius: '5px',
          }}
          onClick={() => setSelectedOption('opd')}
        >
          OPD Entries
        </button>
      </div>

      {/* <h2>{selectedOption === 'ipd' ? 'IPD Entries' : 'OPD Entries'}</h2> */}
      <DataTable data={tableData[selectedOption]} />
    </>
  );
};

export default DashboardHome;
