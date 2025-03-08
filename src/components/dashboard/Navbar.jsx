import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [adminName, setAdminName] = useState(sessionStorage.getItem("adminName") || '');

  useEffect(() => {
    const handleStorageChange = () => {
      setAdminName(sessionStorage.getItem("adminName"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <header className="navbar">
      <div className="logo">
        <h2>HARSH <span className="success">Clinic</span></h2>
      </div>
      <div className="navbar-right">
        <div className="profile">
          <div className="info">
            <p><b>{adminName || "ADMIN"}</b></p>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
