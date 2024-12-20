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
        { key: 'patientName', label: 'Patient Name' },
        { key: 'visitDate', label: 'Visit Date' },
        { key: 'doctorName', label: 'Doctor Name' },
        { key: 'amount', label: 'Amount' },
        { key: 'actions', label: 'Actions' },
      ],
      rows: [
        {
          opdId: 1,
          patientName: 'John Doe',
          visitDate: '10/12/2024',
          doctorName: 'Dr. Smith',
          amount: 500,
        },
        {
          opdId: 2,
          patientName: 'Jane Roe',
          visitDate: '11/12/2024',
          doctorName: 'Dr. Jane',
          amount: 700,
        },
        {
          opdId: 3,
          patientName: 'Jane Roe',
          visitDate: '11/12/2024',
          doctorName: 'Dr. Jane',
          amount: 700,
        },
        {
          opdId: 4,
          patientName: 'Jane Roe',
          visitDate: '11/12/2024',
          doctorName: 'Dr. Jane',
          amount: 700,
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
