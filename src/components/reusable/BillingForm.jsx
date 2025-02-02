import React, { useState } from "react";
import "/src/assets/css/Form.css";
import { useLocation } from "react-router-dom";

const BillingForm = () => {
  const location = useLocation();
  const ipdId = location.state?.ipdId || ""; // Retrieve IPD ID from the state

  const [formData, setFormData] = useState({
    casePaperNumber: "",
    selectedItems: [], // Array to hold item entries
  });

  const [itemList] = useState([
    "Medicine",
    "Test",
    "Surgery",
    "Room Charges",
    "Consultation Fee",
  ]); // Predefined list of items

  const [showItemDetails, setShowItemDetails] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    itemType: "",
    quantity: "",
    mrpAmount: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    setCurrentItem((item) => ({
      ...item,
      [name]: value,
    }));
  };

  const handleAddItem = () => {
    if (!currentItem.itemType || !currentItem.quantity || !currentItem.mrpAmount) {
      alert("Please fill in all fields for the item.");
      return;
    }

    setFormData((data) => ({
      ...data,
      selectedItems: [...data.selectedItems, currentItem],
    }));

    setCurrentItem({ itemType: "", quantity: "", mrpAmount: "" });
    setShowItemDetails(false);
  };

  const handleRemoveItem = (index) => {
    setFormData((data) => ({
      ...data,
      selectedItems: data.selectedItems.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { casePaperNumber, selectedItems } = formData;

    if (!casePaperNumber || selectedItems.length === 0) {
      alert("Please fill in all required fields and add at least one item.");
      return;
    }

    // Send form data to the backend
    alert("Billing details submitted successfully.");
    window.history.back();//go back to prev page
    console.log("Form Data:", { ipdId, ...formData });
  };

  return (
    <div>
      {/* Title */}
      <h6 className="entries-title">Billing Details Form</h6>

      {/* Form Container */}
      <div className="entries-container">
        <form onSubmit={handleSubmit} className="entries-form">
          {/* IPD ID (Autofilled) */}
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

          {/* Case Paper Number */}
          <div className="entries-form-group">
            <label htmlFor="casePaperNumber" className="entries-form-label">Case Paper Number</label>
            <input
              type="text"
              id="casePaperNumber"
              name="casePaperNumber"
              className="entries-form-input"
              placeholder="Enter case paper number"
              value={formData.casePaperNumber}
              onChange={handleInputChange}
            />
          </div>

          {/* Item Type */}
          <div className="entries-form-group">
            <label htmlFor="itemType" className="entries-form-label">Select Item Type</label>
            <select
              id="itemType"
              name="itemType"
              className="entries-form-input"
              value={currentItem.itemType}
              onChange={(e) => {
                handleItemChange(e);
                setShowItemDetails(true);
              }}
            >
              <option value="">Select an item</option>
              {itemList.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))}
            </select>
          </div>

          {/* Item Details (Displayed when item type is selected) */}
          {showItemDetails && (
            <div className="item-details" >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Item Details</h4>
                <button
                  type="button"
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: "16px", fontWeight: "bold", }}
                  onClick={() => setShowItemDetails(false)}
                >
                  &times;
                </button>
              </div>

              <div className="entries-form-group">
                <label htmlFor="quantity" className="entries-form-label">Quantity</label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="entries-form-input"
                  placeholder="Enter quantity"
                  value={currentItem.quantity}
                  onChange={handleItemChange}
                />
              </div>

              <div className="entries-form-group">
                <label htmlFor="mrpAmount" className="entries-form-label">MRP Amount</label>
                <input
                  type="number"
                  id="mrpAmount"
                  name="mrpAmount"
                  className="entries-form-input"
                  placeholder="Enter MRP amount"
                  value={currentItem.mrpAmount}
                  onChange={handleItemChange}
                />
              </div>

              <button
                type="button"
                style={{ 
                  marginTop: "10px",
                  border: "1px solid #6C63FE",
                  backgroundColor: "#6C63FE",
                  color: "#fff",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                  borderRadius: "5px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  // width: "100%",
                  padding: "10px 20px",
                }}
                onClick={handleAddItem}
              >
                Add Item
              </button>
            </div>
          )}

          {/* Selected Items List */}
          <div className="selected-items">
            <h4>Selected Items</h4>
            {formData.selectedItems.map((item, index) => (
              <div key={index} className="item-entry">
                <span>{`${item.itemType} - Quantity: ${item.quantity}, MRP: ₹${item.mrpAmount}`}</span>
                <button
                  type="button"
                  style={{ background: "none", border: "none", cursor: "pointer", marginLeft: "10px" }}
                  onClick={() => handleRemoveItem(index)}
                >
                  &times;
                </button>
              </div>
            ))}
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
            Submit Billing Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default BillingForm;
