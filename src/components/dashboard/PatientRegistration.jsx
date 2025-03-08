import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '/src/assets/css/Dashboard.css';
import DataTable from '../reusable/DataTable';
import { useNavigate } from 'react-router-dom';

const PatientRegistration = () => {
  // State to store patient data
  const [patientData, setPatientData] = useState({
    headers: [
      { key: 'patientId', label: 'Case Paper ID' },
      { key: 'name', label: 'Name' },
      { key: 'mobile', label: 'Mobile Number' },
      { key: 'address', label: 'Address' },
      { key: 'gender', label: 'Gender' },
      // { key: 'registrationDate', label: 'Registration Date' },
      { key: 'status', label: 'Status' },
      { key: 'notes', label: 'Notes' },
      { key: 'adminId', label: 'Admin ID' },
      { key: 'actions', label: 'Actions' },
    ],
    rows: [],
  });

  const navigate = useNavigate();

  // Function to fetch all patients data using axios
  const getAllPatients = async () => {
    try {
      const response = await axios.get('http://localhost:8086/patient/all'); // Replace with your API endpoint
      const rows = response.data.map(patient => ({
        ...patient,
        actions: ['Add IPD', 'Add OPD', 'Print Bill'] // Dynamic actions per patient
      }));
      setPatientData(prevData => ({
        ...prevData,
        rows: rows, // Update rows with dynamic actions
      }));
    } catch (error) {
      console.error("Error fetching patients data:", error);
    }
  };

  // Fetch patient data on component mount
  useEffect(() => {
    getAllPatients();
  }, []);

  // Navigate to add patient page
  const handleOnClick = () => {
    navigate('/dashboard/patient-registration/add');
  };

  return (
    <>
      <h1>Patient Registration Section</h1>
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
        Add Record
      </button>
      <DataTable data={patientData} />
    </>
  );
};

export default PatientRegistration;
