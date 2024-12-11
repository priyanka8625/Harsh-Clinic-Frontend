import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import DashboardHome from './DashboardHome';
import PatientRegistration from './PatientRegistration';
import IPDEntries from './IPDEntries';
import OPDEntries from './OPDEntries';
import ItemDetails from './ItemDetails';
import '/src/assets/css/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="container1">
      <Navbar />
        <Sidebar />
        <main className='main-content'>
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/patient-registration" element={<PatientRegistration />} />
            <Route path="/ipd-entries" element={<IPDEntries />} />
            <Route path="/opd-entries" element={<OPDEntries />} />
            <Route path="/item-details" element={<ItemDetails />} />
          </Routes>
        </main>
    </div>
  );
};

export default Dashboard;
