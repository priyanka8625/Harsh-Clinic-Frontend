import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '/src/assets/css/Dashboard.css';


const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove admin session details
    sessionStorage.removeItem("adminId");
    sessionStorage.removeItem("adminName");
    // Force redirect to homepage and prevent going back
    navigate("/login");
  };

  const menuItems = [
      { name: 'Dashboard', icon: 'grid_view', path: '/dashboard' },
      { name: 'Patient Registration', icon: 'person_outline', path: '/dashboard/patient-registration' },
      { name: 'IPD Entries', icon: 'receipt_long', path: '/dashboard/ipd-entries' },
      { name: 'OPD Entries', icon: 'receipt_long', path: '/dashboard/opd-entries' },
      { name: 'Item Details', icon: 'local_mall', path: '/dashboard/item-details' },
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
        {/* Logout button */}
        <div className="sidebar-link" onClick={handleLogout} style={{ cursor: "pointer" }}>
          <span className="material-symbols-sharp">logout</span>
          <h3>Logout</h3>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
