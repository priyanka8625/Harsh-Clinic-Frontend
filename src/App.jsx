// import './App.css';
// import Home from './components/Home';
// import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

// import Login from './components/Login';
// import Register from './components/Register';
// import Dashboard from './components/dashboard/Dashboard.jsx';

// function App() {
//   return (
//     <>
// <BrowserRouter>
//   <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="/register" element={<Register />} />
//           <Route exact path="/login" element={<Login />} />
//           <Route exact path="/dashboard/*" element={<Dashboard />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/dashboard/Dashboard.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;