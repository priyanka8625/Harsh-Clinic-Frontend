import React, { useState } from "react";
import "/src/assets/css/Form.css";

const IPDForm = () => {
  const [formData, setFormData] = useState({
    ipdId: "",
    casePaperNumber: "",
    admissionDate: "",
    dischargeDate: "",
    amount: "",
    notes: "",
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { ipdId, casePaperNumber, admissionDate, dischargeDate, amount, notes } = formData;

    // Validate form data
    if (!ipdId || !casePaperNumber || !admissionDate || !dischargeDate || !amount || !notes) {
      alert("All fields are required!");
      return;
    }

    alert("Data submitted successfully");
    console.log("Submitted Data:", formData);
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
              type="text"
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
            <label htmlFor="casePaperNumber" className="entries-form-label">
              Case Paper No
            </label>
            <input
              type="text"
              id="casePaperNumber"
              name="casePaperNumber"
              className="entries-form-input"
              placeholder="Enter case paper no."
              value={formData.casePaperNumber}
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

          {/* Amount */}
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
          </div>

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
