import React from 'react';
import InsightCards from '../reusable/InsightCards';
import DataTable from '../reusable/DataTable';
import '/src/assets/css/Dashboard.css';


const DashboardHome = () => (
  <>
    <h1>Dashboard</h1>
    <h3>Select start and end date</h3>
    <div className="date">
      <input type="date" />
      <input type="date" />
    </div>
    <InsightCards/>
    <DataTable/>
  </>
);

export default DashboardHome;
