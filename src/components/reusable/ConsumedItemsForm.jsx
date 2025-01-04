import React, { useState } from "react";
import "/src/assets/css/Form.css";
import { useLocation } from "react-router-dom";

const ConsumedItemsForm = () => {
  const location = useLocation();
  const ipdId = location.state?.ipdId || "";
  const opdId = location.state?.opdId || "";

  const isIPD = !!ipdId; // Determine if it's an IPD record
  const initialFormData = isIPD
    ? { ipdId, selectedItems: [], totalCost: 0 }
    : { opdId, selectedItems: [], totalCost: 0 };

  const [formData, setFormData] = useState(initialFormData);

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

    const newItem = {
      ...currentItem,
      quantity: parseFloat(currentItem.quantity),
      mrpAmount: parseFloat(currentItem.mrpAmount),
    };

    setFormData((data) => {
      const updatedItems = [...data.selectedItems, newItem];
      const updatedCost = updatedItems.reduce(
        (total, item) => total + item.quantity * item.mrpAmount,
        0
      );

      return {
        ...data,
        selectedItems: updatedItems,
        totalCost: updatedCost,
      };
    });

    setCurrentItem({ itemType: "", quantity: "", mrpAmount: "" });
    setShowItemDetails(false);
  };

  const handleRemoveItem = (index) => {
    setFormData((data) => {
      const updatedItems = data.selectedItems.filter((_, i) => i !== index);
      const updatedCost = updatedItems.reduce(
        (total, item) => total + item.quantity * item.mrpAmount,
        0
      );

      return {
        ...data,
        selectedItems: updatedItems,
        totalCost: updatedCost,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { selectedItems } = formData;

    if (selectedItems.length === 0) {
      alert("Please add at least one item.");
      return;
    }

    // Send form data to the backend
    alert("Details submitted successfully.");
    console.log("Form Data:", formData);
  };

  return (
    <div>
      {/* Title */}
      <h6 className="entries-title">
        Add Items for {isIPD ? "IPD" : "OPD"}
      </h6>

      {/* Form Container */}
      <div className="entries-container">
        <form onSubmit={handleSubmit} className="entries-form">
          {/* ID (Autofilled) */}
          <div className="entries-form-group">
            <label htmlFor={isIPD ? "ipdId" : "opdId"} className="entries-form-label">
              {isIPD ? "IPD ID" : "OPD ID"}
            </label>
            <input
              type="text"
              id={isIPD ? "ipdId" : "opdId"}
              name={isIPD ? "ipdId" : "opdId"}
              className="entries-form-input"
              value={isIPD ? formData.ipdId : formData.opdId}
              disabled
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
            <div className="item-details">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Item Details</h4>
                <button
                  type="button"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
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

          {/* Total Cost */}
          <div className="entries-form-group">
            <label htmlFor="totalCost" className="entries-form-label">Total Cost</label>
            <input
              type="text"
              id="totalCost"
              name="totalCost"
              className="entries-form-input"
              value={`₹${formData.totalCost}`}
              readOnly
            />
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
            type="submit"
          >
            {isIPD ? "Add IPD Items" : "Add OPD Items"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsumedItemsForm;
