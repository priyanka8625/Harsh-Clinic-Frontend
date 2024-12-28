import React, { useState } from "react";
import "/src/assets/css/Form.css";

const ItemsForm = () => {
  const [formData, setFormData] = useState({
    itemId: "",
    discountPerItem: "",
    status: "active", // Default status
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Destructure form data
    const { itemId, discountPerItem, status } = formData;

    // Validation
    if (!itemId.trim() || !discountPerItem.trim() || !status) {
      alert("All fields are required!");
      return;
    }

    // Successful submission
    alert("Data submitted successfully!");
    console.log("Form Data:", formData);
  };

  return (
    <div>
      {/* Title */}
      <h6 className="entries-title">Item Entries</h6>

      {/* Form Container */}
      <div className="entries-container">
        <form onSubmit={handleSubmit} className="entries-form">
          {/* Item ID */}
          <div className="entries-form-group">
            <label htmlFor="itemId" className="entries-form-label">
              Item ID
            </label>
            <input
              type="text"
              id="itemId"
              name="itemId"
              className="form-input"
              placeholder="Enter Item ID"
              value={formData.itemId}
              onChange={handleInputChange}
            />
          </div>

          {/* Discount Per Item */}
          <div className="entries-form-group">
            <label htmlFor="discountPerItem" className="entries-form-label">
              Discount Per Item
            </label>
            <input
              type="number"
              id="discountPerItem"
              name="discountPerItem"
              className="entries-form-input"
              placeholder="Enter discount per item"
              value={formData.discountPerItem}
              onChange={handleInputChange}
            />
          </div>

          {/* Status Selection */}
          <div className="entries-form-group">
            <h3 className="entries-form-label">Select Status</h3>
            <div className="entries-form-radio">
              <label className="entries-form-radio-label">
                <input
                  type="radio"
                  name="status"
                  value="active"
                  className="entries-form-radio-input"
                  checked={formData.status === "active"} // Correctly bound
                  onChange={handleInputChange} // Updates the state
                />
                Active
              </label>
              <br />
              <label className="entries-form-radio-label">
                <input
                  type="radio"
                  name="status"
                  value="inactive"
                  className="entries-form-radio-input"
                  checked={formData.status === "inactive"} // Correctly bound
                  onChange={handleInputChange} // Updates the state
                />
                Inactive
              </label>
            </div>
          </div>

          {/* Submit Button */}
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
            Add Record
          </button>
        </form>
      </div>
    </div>
  );
};

export default ItemsForm;
