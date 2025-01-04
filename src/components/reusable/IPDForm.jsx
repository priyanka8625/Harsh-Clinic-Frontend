import React, { useEffect, useState } from "react"; 
import "/src/assets/css/Form.css";
import { useLocation } from "react-router-dom";

const IPDForm = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    ipdId: "",
    casePaperId: "",
    admissionDate: "",
    dischargeDate: "",
    amount: "",
    notes: "",
  });

  const [isUpdateMode, setIsUpdateMode] = useState(false);

  useEffect(() => {
    if (location.state && location.state.ipdData) {
      const ipdData = location.state.ipdData;

      setFormData({
        ipdId: ipdData.ipdId || "",
        casePaperId: ipdData.casePaperId || "",
        admissionDate: ipdData.admissionDate
          ? new Date(ipdData.admissionDate).toISOString().split("T")[0]
          : "",
        dischargeDate: ipdData.dischargeDate
          ? new Date(ipdData.dischargeDate).toISOString().split("T")[0]
          : "",
        amount: ipdData.amount || "",
        notes: ipdData.notes || "",
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

    const { ipdId, casePaperId, admissionDate, dischargeDate, amount, notes } = formData;

    if (!ipdId || !casePaperId || !admissionDate || !dischargeDate || !amount || !notes) {
      alert("All fields are required!");
      return;
    }

    const action = isUpdateMode ? "updated" : "added";
    alert(`Data successfully ${action}`);
    console.log(`${action.charAt(0).toUpperCase() + action.slice(1)} Data:`, formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h6 className="entries-title">
        {isUpdateMode ? "Update IPD Record" : "Enter New IPD Record"}
      </h6>

      <div className="entries-container">
        <form onSubmit={handleSubmit} className="entries-form">
          <div className="entries-form-group">
            <label htmlFor="ipdId" className="entries-form-label">
              IPD ID
            </label>
            <input
              type="text"
              id="ipdId"
              name="ipdId"
              className="entries-form-input"
              value={formData.ipdId}
              readOnly={isUpdateMode}
            />
          </div>

          <div className="entries-form-group">
            <label htmlFor="casePaperId" className="entries-form-label">
              Case Paper No
            </label>
            <input
              type="text"
              id="casePaperId"
              name="casePaperId"
              className="entries-form-input"
              value={formData.casePaperId}
              readOnly={isUpdateMode}
            />
          </div>

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

          <div className="entries-form-group">
            <label htmlFor="amount" className="entries-form-label">
              Amount
            </label>
            <input
              type="text"
              id="amount"
              name="amount"
              className="entries-form-input"
              value={formData.amount}
              onChange={handleInputChange}
            />
          </div>

          <div className="entries-form-group">
            <label htmlFor="notes" className="entries-form-label">
              Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              className="entries-form-input"
              value={formData.notes}
              onChange={handleInputChange}
              rows="3"
            ></textarea>
          </div>

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

export default IPDForm;
