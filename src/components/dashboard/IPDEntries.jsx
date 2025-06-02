import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '/src/assets/css/Dashboard.css';
import DataTable from '../reusable/DataTable';
import { useNavigate } from 'react-router-dom';

const IPDEntries = () => {
  // State to store IPD data
  const [ipdData, setIpdData] = useState({
    headers: [
      { key: 'ipdId', label: 'IPD ID' },
      { key: 'casePaperId', label: 'CASE PAPER ID' },
      { key: 'admissionDate', label: 'Admission Date' },
      { key: 'dischargeDate', label: 'Discharge Date' },
      { key: 'amount', label: 'Amount' },
      { key: 'adminId', label: 'ADMIN ID' },
      { key: 'admissionDate', label: 'Added On' },
      { key: 'actions', label: 'Actions' }, // Actions column
    ],
    rows: [], // Empty initially, will be populated with data
  });

  const navigate = useNavigate();

  // Function to fetch IPD data using axios
  const fetchIPDData = async () => {
    try {
      const response = await axios.get('http://harsh-2onb.onrender.com:8086/ipd/all',{withCredentials:true}); // Replace with your API endpoint

      // Mapping through the response data to add actions dynamically
      const rowsWithActions = response.data.map((row) => ({
        ...row,
        actions: ['Update IPD', 'Add Items for IPD', 'Print Bill','Add Items for IPD'], // Example dynamic actions
      }));

      // Update the rows in the state with actions
      setIpdData((prevData) => ({
        ...prevData,
        rows: rowsWithActions,
      }));
    } catch (error) {
      console.error('Error fetching IPD data:', error);
    }
  };

  // Fetch IPD data when the component is mounted
  useEffect(() => {
    fetchIPDData();
  }, []);

  // Navigate to add IPD entry page
  const handleOnClick = () => {
    navigate('/dashboard/ipd-entries/add');
  };

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
          fontStyle: 'bold',
        }}
        onClick={handleOnClick}
      >
        Add record
      </button>
      <DataTable data={ipdData} /> {/* Pass updated data to the table */}
    </>
  );
};

export default IPDEntries;