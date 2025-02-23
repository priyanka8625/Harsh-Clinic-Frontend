import React, { useState, useEffect } from "react";
import "/src/assets/css/Form.css";
import { AddOpdRecord } from "../../services/user-service";
import { useLocation, useNavigate } from "react-router-dom";

const OPDForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const opdId = location.state?.opdId || ""; 
  const casePaperId = location.state?.casePaperId || ""; 

  const [formData, setFormData] = useState({
    opdId: "",
    casePaperId: "",
    opdDate: "",
    amount: "",
    notes: "",
  });

  // Update state when opdId and casePaperId change
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      opdId: opdId,
      casePaperId: casePaperId,
    }));
  }, [opdId, casePaperId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check for empty fields
    const { opdId, casePaperId, opdDate, amount, notes } = formData;

    if (!opdId || !casePaperId || !opdDate || !amount || !notes) {
      alert("All fields are required!");
      return; // Prevent submission if fields are empty
    }

    const formattedData = {
      ...formData,
      opdId: Number(formData.opdId) || null,
      casePaperId: Number(formData.casePaperId) || null,
    };

    if (!formattedData.opdId || !formattedData.casePaperId) {
      alert("OPD ID and Case Paper ID must be valid numbers!");
      return;
    }

    // If validation passes
    AddOpdRecord(formattedData)
      .then((resp) => {
        console.log("Opd Record added successfully", resp);
        alert("Opd Record added successfully");
        navigate("/dashboard/opd-entries");
      })
      .catch((error) => {
        console.error("Error adding patient:", error);
        alert("Error adding patient");
      });
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
            <label htmlFor="opdId" className="entries-form-label">
              OPD Id
            </label>
            <input
              type="text"
              id="opdId"
              name="opdId"
              className="entries-form-input"
              placeholder="Enter OPD ID"
              value={formData.opdId} // Use formData.opdId
              onChange={handleInputChange}
            />
          </div>

          {/* Case Paper Number */}
          <div className="entries-form-group">
            <label htmlFor="casePaperId" className="entries-form-label">
              Case Paper No
            </label>
            <input
              type="text"
              id="casePaperId"
              name="casePaperId"
              className="entries-form-input"
              placeholder="Enter case paper no."
              value={formData.casePaperId} // Use formData.casePaperId
              onChange={handleInputChange}
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
            Add record
          </button>
        </form>
      </div>
    </div>
  );
};

export default OPDForm;
