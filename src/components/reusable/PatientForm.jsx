import React, { useState } from "react";
import "/src/assets/css/Form.css";
import { AddPatient } from "../../services/user-service";
import { useNavigate } from "react-router-dom";
//admin id mapping 
const PatientForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
 // casePaperId: "", // Will be auto-generated
    name: "",
    mobile: "",
    address: "",
    gender: "",
    status: "Active", // Default status set to "Active"
    notes: "",
    regDate:"",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check for empty fields
    const { name, mobile, address, gender, status, notes } = formData;

    if (!name || !mobile || !address || !gender || !status){
      alert("All fields are required!");
      return; // Prevent submission if fields are empty
    }
    console.log(JSON.stringify("data being sent ",formData));

    AddPatient(formData)
    .then((resp)=>{
      console.log(JSON.stringify("data succ",formData));
      console.log("Patient registered successfully",resp);
      alert("Patient registered successfully");
      navigate("/dashboard/patient-registration");
    })
    .catch((error)=>{
      console.log(JSON.stringify("data err",formData));
      console.error("Error adding patient:", error);
      alert("Error adding patient");
    })
  
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* Title */}
      <h6 className="entries-title">Patient Registration Form</h6>

      {/* Form Container */}
      <div className="entries-container">
        <form onSubmit={handleSubmit} className="entries-form">
          {/* Patient Name */}
          <div className="entries-form-group">
            <label htmlFor="name" className="entries-form-label">Patient's Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="entries-form-input"
              placeholder="Enter patient's full name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>

          {/* Mobile Number */}
          <div className="entries-form-group">
            <label htmlFor="mobileNumber" className="entries-form-label">Mobile Number</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              className="entries-form-input"
              placeholder="Enter mobile number"
              value={formData.mobileNumber}
              onChange={handleInputChange}
            />
          </div>

          {/* Address */}
          <div className="entries-form-group">
            <label htmlFor="address" className="entries-form-label">Address</label>
            <textarea
              id="address"
              name="address"
              className="entries-form-input"
              placeholder="Enter patient's address"
              rows="3"
              value={formData.address}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* Gender */}
          <div className="entries-form-group">
            <label htmlFor="gender" className="entries-form-label">Gender</label>
            <select
              id="gender"
              name="gender"
              className="entries-form-input"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Registration Date */}
          <div className="entries-form-group">
            <label htmlFor="registrationDate" className="entries-form-label">Registration Date</label>
            <input
              type="date"
              id="regDate"
              name="regDate"
              className="entries-form-input"
              value={formData.registrationDate}
              onChange={handleInputChange}
            />
          </div>

          {/* Status */}
          <div className="entries-form-group">
            <label htmlFor="status" className="entries-form-label">Status</label>
            <select
              id="status"
              name="status"
              className="entries-form-input"
              value={formData.status}
              onChange={handleInputChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Suspended">Suspended</option>
            </select>
          </div>

          {/* Notes */}
          <div className="entries-form-group">
            <label htmlFor="notes" className="entries-form-label">Additional Notes</label>
            <textarea
              id="notes"
              name="notes"
              className="entries-form-input"
              placeholder="Enter any additional notes"
              rows="3"
              value={formData.notes}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            style={{
              marginTop: '30px',
              padding: '10px 20px',
              border: '1px solid #6C63FE',
              backgroundColor: '#6C63FE',
              color: '#fff',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              borderRadius: '5px',
              fontSize: '16px',
              fontWeight: 'bold',
              width: '100%',
            }}
          >
            Register Patient
          </button>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;
