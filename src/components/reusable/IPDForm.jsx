import React, { useState, useEffect } from "react";
import "/src/assets/css/Form.css";
import { AddIpdRecord } from "../../services/user-service";
import { useLocation, useNavigate } from "react-router-dom";

const IPDForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const ipdId = location.state?.ipdId || "";
  const casePaperId = location.state?.casePaperId || "";

  const [formData, setFormData] = useState({
    ipdId: "",
    casePaperId: "",
    admissionDate: "",
    dischargeDate: "",
    notes: "",
  });

  // Update state when ipdId and casePaperId change
  useEffect(() => {
    setFormData((prevData) => ({
      ...prevData,
      ipdId: ipdId,
      casePaperId: casePaperId,
    }));
  }, [ipdId, casePaperId]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { ipdId, casePaperId, admissionDate, dischargeDate, notes } = formData;

    // Validation for required fields
    if (!ipdId || !casePaperId || !admissionDate || !dischargeDate || !notes) {
      alert("All fields are required!");
      return;
    }

    const formattedData = {
      ...formData,
      ipdId: Number(formData.ipdId) || null,
      casePaperId: Number(formData.casePaperId) || null,
    };

    if (!formattedData.ipdId || !formattedData.casePaperId) {
      alert("IPD ID and Case Paper ID must be valid numbers!");
      return;
    }

    // Submitting the IPD record
    AddIpdRecord(formattedData)
      .then((resp) => {
        console.log("IPD Record added successfully", resp);
        alert("IPD Record added successfully");
        navigate("/dashboard/ipd-entries");
      })
      .catch((error) => {
        console.error("Error adding IPD record:", formattedData);
        alert("Error adding IPD record");
      });
  };

  // Handle input changes
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
      <h6 className="entries-title">Enter a new IPD record</h6>

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
              placeholder="Enter IPD ID"
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
              type="text"
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

export default IPDForm;
