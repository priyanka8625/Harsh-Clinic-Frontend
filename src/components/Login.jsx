import { useState } from "react";
import "../assets/css/LoginRegister.css"; // Ensure this file contains your existing styles
import registerImg from '../assets/img/reg.svg';
import loginImg from '../assets/img/login.svg';
import {SignUp} from "../services/user-service"
import {SignIn} from '../services/user-service'
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    userId: '',
    password: '',
  });

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };
  
  const setAdminSession = (adminData) => {
    sessionStorage.setItem("adminId", adminData.adminId);
    sessionStorage.setItem("adminName", adminData.name);
  };
  

 const handleSignInClick = () => {
    //setAdminSession(formData.userId);
    setIsSignUpMode(false);
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!isSignUpMode) {
        const data = { userId: formData.userId, password: formData.password };

        SignIn(data)
            .then((resp) => {
                console.log("Sign-in successful:", resp.data);

                // Save admin session
                setAdminSession(resp.data);

                // Ensure session is set before navigating
                setTimeout(() => {
                    navigate('/dashboard');
                }, 500);
            })
            .catch((error) => {
                console.error("Error during signin:", error);
                alert(error.response?.data?.error || "Login failed. Please try again.");
            });
    }
};


  return (
    <>
      <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={handleSubmit} className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="number"
                  name="userId"
                  placeholder="UserId (mobile no)"
                  value={formData.userId}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <input type="submit" value="Login" className="btn solid" />
            </form>

            <form onSubmit={handleSubmit} className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="number"
                  name="userId"
                  placeholder="UserId (mobile no)"
                  value={formData.userId}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <input type="submit" className="btn" value="Sign up" />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p id="p">Sign Up to create your own admin account!</p>
              <button
                className="btn transparent"
                id="sign-up-btn"
                onClick={handleSignUpClick}
              >
                Sign up
              </button>
            </div>
            <img src={loginImg} className="image" alt="Login illustration" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p id="p">Sign in to get access to the core features!</p>
              <button
                className="btn transparent"
                id="sign-in-btn"
                onClick={handleSignInClick}
              >
                Sign in
              </button>
            </div>
            <img src={registerImg} className="image" alt="Register illustration" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;