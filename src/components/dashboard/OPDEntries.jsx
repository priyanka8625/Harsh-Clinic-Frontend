import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '/src/assets/css/Dashboard.css';
import DataTable from '../reusable/DataTable';
import { useNavigate } from 'react-router-dom';

const OPDEntries = () => {
  const [opdData, setOpdData] = useState({
    headers: [
      { key: 'opdId', label: 'OPD ID' },
      { key: 'casePaperId', label: 'Case Paper ID' },
      { key: 'opdDate', label: 'OPD Date' },
      { key: 'createDate', label: 'Creation Date' },
      { key: 'totalAmount', label: 'Amount' },
      { key: 'notes', label: 'Notes' },
      { key: 'adminId', label: 'Admin ID' },
      { key: 'actions', label: 'Actions' },
    ],
    rows: [],
  });
  const navigate = useNavigate();

  const fetchOPDData = async () => {
    try {
      const response = await axios.get('http://localhost:8086/opd/all'); 
      const rowsWithActions = response.data.map((row) => ({
        ...row,
        actions: ['Add Items for OPD', 'Update OPD'],
      }));

      setOpdData((prevData) => ({
        ...prevData,
        rows: rowsWithActions,
      }));
    } catch (error) {
      console.error('Error fetching OPD data:', error);
    }
  };

  useEffect(() => {
    fetchOPDData();
  }, []);

  const handleOnClick = () => {
    navigate('/dashboard/opd-entries/add');
  };

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
          fontStyle: 'bold',
        }}
        onClick={handleOnClick}
      >
        Add record
      </button>
      <DataTable data={opdData} />
    </>
  );
};

export default OPDEntries;
