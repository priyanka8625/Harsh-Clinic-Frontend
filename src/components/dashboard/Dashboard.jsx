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
import IPDForm from '../reusable/IPDForm';
import OPDForm from '../reusable/OPDForm';
import ItemsForm from '../reusable/ItemsForm';
import PatientForm from '../reusable/PatientForm';
import BillingForm from '../reusable/BillingForm';
import ConsumedItemsForm from '../reusable/ConsumedItemsForm';

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
            <Route path="/patient-registration/add" element={<PatientForm />} />
            <Route path="/ipd-entries/add" element={<IPDForm />} />
            <Route path="/opd-entries/add" element={<OPDForm />} />
            <Route path="/item-details/add" element={<ItemsForm />} />
            <Route path="/billing" element={<BillingForm />} />
            <Route path="/consumed-items/add" element={<ConsumedItemsForm />} />
          </Routes>
        </main>
    </div>
  );
};

export default Dashboard;
