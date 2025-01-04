import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "/src/assets/css/Form.css";

const OPDForm = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    opdId: "",
    casePaperId: "",
    opdDate: "",
    amount: "",
    notes: "",
    createDate: "",
  });

  const [isUpdateMode, setIsUpdateMode] = useState(false);

  // Pre-fill data when updating or when casePaperId is passed
  useEffect(() => {
    if (location.state && location.state.opdData) {
      const opdData = location.state.opdData;

      setFormData({
        opdId: opdData.opdId || "",
        casePaperId: opdData.casePaperId || "",
        opdDate: opdData.opdDate
          ? new Date(opdData.opdDate).toISOString().split("T")[0]
          : "",
        amount: opdData.amount || "",
        notes: opdData.notes || ""
      });

      setIsUpdateMode(true);
    } else if (location.state && location.state.casePaperId) {
      setFormData((prevData) => ({
        ...prevData,
        casePaperId: location.state.casePaperId,
      }));
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check for empty fields
    const { opdId, casePaperId, opdDate, amount, notes } = formData;

    if (!opdId ||!casePaperId || !opdDate || !amount || !notes) {
      alert("All fields are required!");
      return; // Prevent submission if fields are empty
    }

    // If validation passes
    const action = isUpdateMode ? "updated" : "added";
    alert(`Data successfully ${action}`);
    console.log(`${action.charAt(0).toUpperCase() + action.slice(1)} Data:`, formData);
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
      <h6 className="entries-title">
        {isUpdateMode ? "Update OPD Record" : "Enter a New OPD Record"}
      </h6>

      {/* Form Container */}
      <div className="entries-container">
        <form onSubmit={handleSubmit} className="entries-form">
          {/* OPD ID */}
          <div className="entries-form-group">
            <label htmlFor="opdId" className="entries-form-label">
              OPD ID
            </label>
            <input
              type="text"
              id="opdId"
              name="opdId"
              className="entries-form-input"
              placeholder="Enter OPD ID"
              value={formData.opdId}
              readOnly={isUpdateMode}
              onChange={handleInputChange}
            />
          </div>

          {/* Case Paper ID */}
          <div className="entries-form-group">
            <label htmlFor="casePaperId" className="entries-form-label">
              Case Paper ID
            </label>
            <input
              type="text"
              id="casePaperId"
              name="casePaperId"
              className="entries-form-input"
              placeholder="Enter Case Paper ID"
              value={formData.casePaperId}
              readOnly
            />
          </div>

          {/* OPD Date */}
          <div className="entries-form-group">
            <label htmlFor="opdDate" className="entries-form-label">
              OPD Date
            </label>
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
              rows="3"
              value={formData.notes}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            style={{
              marginTop: "30px",
              padding: "10px 20px",
              border: "1px solid #6C63FE",
              backgroundColor: "#6C63FE",
              color: "#fff",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              width: "100%",
            }}
          >
            {isUpdateMode ? "Update Record" : "Add Record"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default OPDForm;
