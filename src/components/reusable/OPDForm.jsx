import React, { useState } from "react";
import "/src/assets/css/Form.css";

const OPDForm = () => {
  const [formData, setFormData] = useState({
    opdId: "",
    casePaperNumber: "",
    opdDate: "",
    amount: "",
    notes: "",
    createDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check for empty fields
    const { opdId, casePaperNumber, opdDate, amount, notes } = formData;

    if (!opdId || !casePaperNumber || !opdDate || !amount || !notes ) {
      alert("All fields are required!");
      return; // Prevent submission if fields are empty
    }

    // If validation passes
    alert("Data submitted successfully");
    console.log("Form Data:", formData); // For debugging or further processing
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
      <h6 className="entries-title">Enter a new OPD record</h6>

      {/* Form Container */}
      <div className="entries-container">
        <form onSubmit={handleSubmit} className="entries-form">
          {/* OPD ID */}
          <div className="entries-form-group">
            <label htmlFor="opdId" className="entries-form-label">OPD Id</label>
            <input
              type="text"
              id="opdId"
              name="opdId"
              className="entries-form-input"
              placeholder="Enter OPD ID"
              value={formData.opdId}
              onChange={handleInputChange}
            />
          </div>

          {/* Case Paper Number */}
          <div className="entries-form-group">
            <label htmlFor="casePaperNumber" className="entries-form-label">Case Paper No</label>
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

          {/* OPD Date */}
          <div className="entries-form-group">
            <label htmlFor="opdDate" className="entries-form-label">OPD Date</label>
            <input
              type="date"
              id="opdDate"
              name="opdDate"
              className="entries-form-input"
              value={formData.opdDate}
              onChange={handleInputChange}
            />
          </div>

          {/* Amount */}
          <div className="entries-form-group">
            <label htmlFor="amount" className="entries-form-label">Amount</label>
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
            <label htmlFor="notes" className="entries-form-label">Notes</label>
            <textarea
              id="notes"
              name="notes"
              className="entries-form-input"
              placeholder="Enter notes"
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
            Add record
          </button>
        </form>
      </div>
    </div>
  );
};

export default OPDForm;
