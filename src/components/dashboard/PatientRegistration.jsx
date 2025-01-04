import React from 'react';
import '/src/assets/css/Dashboard.css';
import DataTable from '../reusable/DataTable';
import { Navigate, useNavigate } from 'react-router-dom';

const PatientRegistration = () => {
  // Data for the registered patient details
  const patientData = {
    headers: [
      { key: 'casePaperId', label: 'Case Paper ID' },
      { key: 'name', label: 'Name' },
      { key: 'mobileNumber', label: 'Mobile Number' },
      { key: 'address', label: 'Address' },
      { key: 'gender', label: 'Gender' },
      { key: 'registrationDate', label: 'Registration Date' },
      { key: 'adminId', label: 'Admin ID' },
      { key: 'status', label: 'Status' },
      { key: 'notes', label: 'Notes' },
      { key: 'actions', label: 'Actions' },
    ],
    rows: [
      {
        casePaperId: 101,
        name: 'John Doe',
        mobileNumber: '9876543210',
        address: '123, Main Street',
        gender: 'Male',
        registrationDate: '08/12/2024',
        adminId: 1,
        status: 'Active',
        notes: 'First-time visit',
        actions: ['Add IPD', 'Add OPD'],
      },
      {
        casePaperId: 102,
        name: 'Jane Roe',
        mobileNumber: '8765432109',
        address: '456, Oak Avenue',
        gender: 'Female',
        registrationDate: '09/12/2024',
        adminId: 2,
        status: 'Inactive',
        notes: 'Follow-up pending',
        actions: ['Add IPD', 'Add OPD'],
      },
      {
        casePaperId: 103,
        name: 'Sam Smith',
        mobileNumber: '7654321098',
        address: '789, Pine Road',
        gender: 'Non-binary',
        registrationDate: '10/12/2024',
        adminId: 3,
        status: 'Active',
        notes: 'Routine check-up',
        actions: ['Add IPD', 'Add OPD'],
      },
      {
        casePaperId: 103,
        name: 'Sam Smith',
        mobileNumber: '7654321098',
        address: '789, Pine Road',
        gender: 'Non-binary',
        registrationDate: '10/12/2024',
        adminId: 3,
        status: 'Active',
        notes: 'Routine check-up',
        actions: ['Add IPD', 'Add OPD'],
      },
      {
        casePaperId: 103,
        name: 'Sam Smith',
        mobileNumber: '7654321098',
        address: '789, Pine Road',
        gender: 'Non-binary',
        registrationDate: '10/12/2024',
        adminId: 3,
        status: 'Active',
        notes: 'Routine check-up',
        actions: ['Add IPD', 'Add OPD'],
      },
      {
        casePaperId: 103,
        name: 'Sam Smith',
        mobileNumber: '7654321098',
        address: '789, Pine Road',
        gender: 'Non-binary',
        registrationDate: '10/12/2024',
        adminId: 3,
        status: 'Active',
        notes: 'Routine check-up',
        actions: ['Add IPD', 'Add OPD'],
      },
      {
        casePaperId: 103,
        name: 'Sam Smith',
        mobileNumber: '7654321098',
        address: '789, Pine Road',
        gender: 'Non-binary',
        registrationDate: '10/12/2024',
        adminId: 3,
        status: 'Active',
        notes: 'Routine check-up',
        actions: ['Add IPD', 'Add OPD'],
      },
      {
        casePaperId: 103,
        name: 'Sam Smith',
        mobileNumber: '7654321098',
        address: '789, Pine Road',
        gender: 'Non-binary',
        registrationDate: '10/12/2024',
        adminId: 3,
        status: 'Active',
        notes: 'Routine check-up',
        actions: ['Add IPD', 'Add OPD'],
      },
      {
        casePaperId: 103,
        name: 'Sam Smith',
        mobileNumber: '7654321098',
        address: '789, Pine Road',
        gender: 'Non-binary',
        registrationDate: '10/12/2024',
        adminId: 3,
        status: 'Active',
        notes: 'Routine check-up',
        actions: ['Add IPD', 'Add OPD'],
      },
    ],
  };


  const navigate = useNavigate();

  const handleOnClick = ()=>{
    navigate('/dashboard/patient-registration/add');
  }
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
            fontStyle: 'bold'
          }}
        onClick={handleOnClick}
        >
          Add record
        </button>
      <DataTable data={patientData} />
    </>
  );
};

export default PatientRegistration;
