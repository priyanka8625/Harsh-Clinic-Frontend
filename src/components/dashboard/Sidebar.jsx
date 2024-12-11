import React from 'react';
import { Link } from 'react-router-dom';
import '/src/assets/css/Dashboard.css';


const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: 'grid_view', path: '/dashboard' },
    { name: 'Patient Registration', icon: 'person_outline', path: '/dashboard/patient-registration' },
    { name: 'IPD Entries', icon: 'receipt_long', path: '/dashboard/ipd-entries' },
    { name: 'OPD Entries', icon: 'receipt_long', path: '/dashboard/opd-entries' },
    { name: 'Item Details', icon: 'local_mall', path: '/dashboard/item-details' },
    { name: 'Logout', icon: 'logout', path: '/' }
  ];

  return (
    <aside>
      <div className="sidebar">
        {menuItems.map((item) => (
          <Link key={item.name} to={item.path} className="sidebar-link">
            <span className="material-symbols-sharp">{item.icon}</span>
            <h3>{item.name}</h3>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
