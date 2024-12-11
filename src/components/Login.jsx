import { useState } from "react";
import "../assets/css/LoginRegister.css"; // Ensure this file contains your existing styles
import registerImg from '../assets/img/reg.svg';
import loginImg from '../assets/img/login.svg';

const Login = () => {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    userId: '',
    password: '',
  });

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
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
    const url = isSignUpMode ? "http://localhost:8080/register" : "http://localhost:8080/login";
    const data = isSignUpMode ? { name: formData.name, userId: formData.userId, password: formData.password } : { userId: formData.userId, password: formData.password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        // Handle successful response (e.g., redirect to dashboard or show a success message)
        console.log("Success:", result);
      } else {
        // Handle error (e.g., display error message)
        console.log("Error:", result);
      }
    } catch (error) {
      console.error("Error during the request:", error);
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
