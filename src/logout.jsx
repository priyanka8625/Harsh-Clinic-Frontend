import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // Redirect on page load
//   useEffect(() => {
//     navigate('/dashboard/patient-registration/add');
//   }, []);

  // Logout function
  const logOut = async () => {
    try {
      await axios.post('http://localhost:8086/admin/logout'); // Replace with your API endpoint
      navigate('/login'); // Redirect to login after logout
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <button onClick={logOut}>Logout</button>
//     </div>
//   );
};

export default Dashboard;
