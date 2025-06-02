import React, { useState, useEffect } from "react";
import axios from "axios";
import "/src/assets/css/Form.css";
import { useLocation } from "react-router-dom";

const BillingForm = () => {
  const location = useLocation();
  const ipdId = location.state?.ipdId || ""; // Retrieve IPD ID from the state

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send request with ipdId in the URL and expect a Blob response
      const response = await axios.get(`http://harsh-2onb.onrender.com/bills/download/${ipdId}`, {
        responseType: "blob", // Important to get binary data
      });
  
      // Create a URL for the blob
      const url = window.URL.createObjectURL(new Blob([response.data]));
  
      // Create an anchor element to trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Bill_${ipdId}.pdf`); // Set file name
      document.body.appendChild(link);
      link.click();
  
      // Cleanup
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
  
      alert("Billing details downloaded successfully");
    } catch (error) {
      console.error("Error downloading billing details:", error);
      alert("Error downloading billing details");
    }
  };
  
  return (
    <div>
      <h6 className="entries-title">Billing Details Form</h6>

      <div className="entries-container">
        <form onSubmit={handleSubmit} className="entries-form">
          <div className="entries-form-group">
            <label htmlFor="ipdId" className="entries-form-label">IPD ID</label>
            <input
              type="text"
              id="ipdId"
              name="ipdId"
              className="entries-form-input"
              value={ipdId}
              disabled
            />
          </div>

          <button
            type="submit"
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
            Submit Billing Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default BillingForm;
