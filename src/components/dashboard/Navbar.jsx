import React from 'react';
import '/src/assets/css/Dashboard.css';


const Navbar = () => (
  <header className="navbar">
    <div className="logo">
      <h2>HARSH <span className="success">Clinic</span></h2>
    </div>
    <div className="navbar-right">
      <div className="profile">
        <div className="info">
          <p><b>Babar</b></p>
          <p>Admin</p>
        </div>
        <div className="profile-photo">
          <img src="/src/assets/img/user.png" alt="Profile" />
        </div>
      </div>
    </div>
  </header>
);

export default Navbar;
