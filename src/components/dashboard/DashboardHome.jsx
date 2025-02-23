import React, { useState, useEffect } from 'react';
import InsightCards from '../reusable/InsightCards';
import DataTable from '../reusable/DataTable';
import '/src/assets/css/Dashboard.css';
import axios from 'axios';

const DashboardHome = () => {
  const [selectedOption, setSelectedOption] = useState('ipd');
  const [tableData, setTableData] = useState({
    ipd: {
      headers: [
        { key: 'ipdId', label: 'IPD ID' },
        { key: 'casePaperId', label: 'CASE PAPER ID' },
        { key: 'admissionDate', label: 'Admission Date' },
        { key: 'dischargeDate', label: 'Discharge Date' },
        { key: 'amount', label: 'Amount' },
        { key: 'adminId', label: 'ADMIN ID' },
        { key: 'actions', label: 'Actions' },
      ],
      rows: [], 
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
      rows: [], 
    },
  });

  const [opdCount, setOpdCount] = useState(0); 
  const [ipdCount, setIpdCount] = useState(0);
  const [itemCount,setItemCount]=useState(0);
  const [patientCount, setPatientCount] = useState(0);

  const fetchData = async (option) => {
    try {
      const response = await axios.get(`http://localhost:8086/${option}/all`);
      const rowsWithActions = response.data.map((row) => ({
        ...row,
        actions: option === 'ipd' ? ['Update IPD', 'Add Items for IPD', 'Print Bill'] : [ 'Update OPD'],
      }));

      setTableData((prevData) => ({
        ...prevData,
        [option]: {
          ...prevData[option],
          rows: rowsWithActions, 
        },
      }));
    } catch (error) {
      console.error(`Error fetching ${option} data:`, error);
    }
  };

  // Fetch counts for OPD, IPD, and Patient
  const fetchCounts = async () => {
    try {
      const opdResponse = await axios.get('http://localhost:8086/opd/all');
      const ipdResponse = await axios.get('http://localhost:8086/ipd/all');
      const patientResponse = await axios.get('http://localhost:8086/patient/all');
      const itemResponse=await axios.get('http://localhost:8086/item/all')
      setOpdCount(opdResponse.data.length);
      setIpdCount(ipdResponse.data.length);
      setItemCount(itemResponse.data.length);
      setPatientCount(patientResponse.data.length);

      console.log("OPD Count:", opdResponse.data.length);
      console.log("IPD Count:", ipdResponse.data.length);
      console.log("Patient Count:", patientResponse.data.length);

    } catch (error) {
      console.error('Error fetching counts:', error);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    fetchCounts(); 
    fetchData(selectedOption); 
  }, [selectedOption]);

  return (
    <>
      <h1>Dashboard</h1>
      <h3>Select start and end date</h3>
      <div className="date">
        <input type="date" />
        <input type="date" />
      </div>

      <InsightCards opdCount={opdCount} ipdCount={ipdCount} patientCount={patientCount} itemCount={itemCount} />

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
      <DataTable data={tableData[selectedOption]} parentName="dashboard" />

    </>
  );
};

export default DashboardHome;
