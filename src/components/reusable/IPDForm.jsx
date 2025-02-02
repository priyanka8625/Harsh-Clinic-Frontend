import React, { useState } from "react";
import "/src/assets/css/Form.css";
import { AddIpdRecord } from "../../services/user-service";
import { useNavigate } from "react-router-dom";
//error
const IPDForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    ipdId: "",
    casePaperId: "",
    admissionDate: "",
    dischargeDate: "",
    
   // amount: "",
    notes: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  //   const getAdminFromSession = () => {
  //     const adminId = sessionStorage.getItem("adminId");
  //     console.log("Retrieved adminId:", adminId); // Debug output
  //     return adminId;
  //   };


    
  //   const { ipdId, casePaperId, admissionDate, dischargeDate, notes  } = formData;
  //   const adminId = getAdminFromSession();
  // //  const adminId = getAdminFromSession();
  //   if (!adminId) {
  //     console.error("adminId not found in sessionStorage",adminId);
  //     return;
  //   }
    
    if (!ipdId || !casePaperId || !admissionDate || !dischargeDate || !notes ) {
      alert("All fields are required!");
      return;
    }
    
    const formattedData = {
      ...formData,
      ipdId: formData.ipdId ? Number(formData.ipdId) : null,
      casePaperId: formData.casePaperId ? Number(formData.casePaperId) : null,
    };
    if (!formattedData.ipdId || !formattedData.casePaperId) {
      alert("IPD ID and Case Paper ID must be valid numbers!");
      return;
    }
    

    console.log("Form Data being sent:", JSON.stringify(formattedData));

    AddIpdRecord(formattedData)
    .then((resp)=>{
      console.log(JSON.stringify("data succ",formattedData));
      console.log("Ipd Record added successfully",resp);
      alert("Ipd Record added successfully");
      navigate("/dashboard/ipd-entries");
    })
    .catch((error)=>{
      console.log(JSON.stringify("data fail",formattedData));
      console.error("Error adding patient:", error);
      alert("Error adding patient");
    })
    // alert("Data submitted successfully");
    // console.log("Submitted Data:", formData);
  };
 
  
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* Form Title */}
      <h6 className="entries-title">Enter New IPD Record</h6>

      {/* Form Container */}
      <div className="entries-container">
        <form onSubmit={handleSubmit} className="entries-form">
          {/* IPD ID */}
          <div className="entries-form-group">
            <label htmlFor="ipdId" className="entries-form-label">
              IPD ID
            </label>
            <input
              type="number"
              id="ipdId"
              name="ipdId"
              className="entries-form-input"
              placeholder="Enter ID"
              value={formData.ipdId}
              onChange={handleInputChange}
            />
          </div>

          {/* Case Paper Number */}
          <div className="entries-form-group">
            <label htmlFor="casePaperId" className="entries-form-label">
              Case Paper No
            </label>
            <input
              type="number"
              id="casePaperId"
              name="casePaperId"
              className="entries-form-input"
              placeholder="Enter case paper no."
              value={formData.casePaperId}
              onChange={handleInputChange}
            />
          </div>

          {/* Admission Date */}
          <div className="entries-form-group">
            <label htmlFor="admissionDate" className="entries-form-label">
              Admission Date
            </label>
            <input
              type="date"
              id="admissionDate"
              name="admissionDate"
              className="entries-form-input"
              value={formData.admissionDate}
              onChange={handleInputChange}
            />
          </div>

          {/* Discharge Date */}
          <div className="entries-form-group">
            <label htmlFor="dischargeDate" className="entries-form-label">
              Discharge Date
            </label>
            <input
              type="date"
              id="dischargeDate"
              name="dischargeDate"
              className="entries-form-input"
              value={formData.dischargeDate}
              onChange={handleInputChange}
            />
          </div>

          {/* Amount
          <div className="entries-form-group">
            <label htmlFor="amount" className="entries-form-label">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              className="entries-form-input"
              placeholder="Enter amount"
              value={formData.amount}
              onChange={handleInputChange}
            />
          </div> */}

          {/* Notes */}
          <div className="entries-form-group">
            <label htmlFor="notes" className="entries-form-label">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              className="entries-form-input"
              placeholder="Enter notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows="3"
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
              fontStyle: 'bold',
              width:'100%'
            }}
          >
            Add record
          </button>
        </form>
      </div>
    </div>
  );
};

export default IPDForm;
