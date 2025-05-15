import React, { useState, useEffect } from "react";
import axios from "axios";
import "/src/assets/css/Form.css";
import { useLocation, useNavigate } from "react-router-dom";
import { AddConsumedItemRecord } from "../../services/user-service";

const ConsumedItemsForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const ipdId = location.state?.ipdId || "";

  const [formData, setFormData] = useState({
    ipdId,
    selectedItems: [],
    totalPrice: 0,
  });

  const [itemList, setItemList] = useState([]);
  const [showItemDetails, setShowItemDetails] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    itemName: "",
    itemId: "",
    quantity: "",
    price: 0,
  });

  console.log("Data being sent:", formData);

  // Fetch item list from API
  useEffect(() => {
    axios
      .get("http://localhost:8086/item/all",{withCredentials:true})
      .then((response) => {
        if (response.data) {
          setItemList(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  const handleItemChange = (e) => {
    const { name, value } = e.target;

    if (name === "itemName") {
      const selectedItem = itemList.find((item) => item.itemName === value);
      setCurrentItem({
        itemName: value,
       itemId: selectedItem ? selectedItem.itemId : "",
        quantity: "",
        price: selectedItem ? selectedItem.price : 0,
      });
    } else {
      setCurrentItem((prevItem) => ({
        ...prevItem,
        [name]: value,
      }));
    }
  };

  const handleAddItem = () => {
    if (!currentItem.itemName || !currentItem.quantity) {
      alert("Please fill in all fields for the item.");
      return;
    }

    const newItem = {
      ...currentItem,
      quantity: parseFloat(currentItem.quantity),
    };

    setFormData((prevData) => {
      const updatedItems = [...prevData.selectedItems, newItem];
      const updatedCost = updatedItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );

      return {
        ...prevData,
        selectedItems: updatedItems,
        totalPrice: updatedCost,
      };
    });

    setCurrentItem({ itemName: "", itemId: "", quantity: "", price: 0 });
    setShowItemDetails(false);
  };

  const handleRemoveItem = (itemId) => {
    setFormData((prevData) => {
      const updatedItems = prevData.selectedItems.filter(
        (item) => item.itemId !== itemId
      );
      const updatedCost = updatedItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );

      return {
        ...prevData,
        selectedItems: updatedItems,
        totalPrice: updatedCost,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.selectedItems.length === 0) {
      alert("Please add at least one item.");
      return;
    }

    const formattedData = {
      ipdId: formData.ipdId,
      selectedItems: formData.selectedItems.map((item) => ({
        itemName: item.itemName,
   //     itemId: item.itemId,
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice: formData.totalPrice,
    };

    console.log("Data Submitted:", formattedData);

    // AddConsumedItemRecord(formattedData)
    //   .then((resp) => {
    //     console.log("Item Record added successfully", resp);
    //     alert("Data submitted successfully!");
    //     window.history.back();
    //   })
    //   .catch((resp) => {
    //     //console.error("Error adding item:", error);
    //     alert("Failed to submit data!",resp);
    //   });
    AddConsumedItemRecord(formattedData)
  .then((resp) => {
    console.log("Item Record added successfully", resp);
    alert(resp.data); // Display the success message from backend
    window.history.back();
  })
  .catch((error) => {
    if (error.response) {
      // The request was made, and the server responded with a status code
      alert(error.response.data); // Backend error message
      console.error("Error response:", error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      alert("No response from server. Please try again.");
      console.error("No response error:", error.request);
    } else {
      // Something happened while setting up the request
      alert("An error occurred: " + error.message);
      console.error("General error:", error.message);
    }
  });

  };

  return (
    <div>
      <h6 className="entries-title">Add Items for IPD</h6>

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
              disabled
            />
          </div>

          <div className="entries-form-group">
            <label htmlFor="itemName" className="entries-form-label">
              Select Item
            </label>
            <select
              id="itemName"
              name="itemName"
              className="entries-form-input"
              value={currentItem.itemName}
              onChange={(e) => {
                handleItemChange(e);
                setShowItemDetails(true);
              }}
            >
              <option value="">Select an item</option>
              {itemList.map((item) => (
                <option key={item.itemId} value={item.itemName}>
                  {item.itemName}
                </option>
              ))}
            </select>
          </div>

          {showItemDetails && (
            <div className="item-details">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Item Details</h4>
                <button
                  type="button"
                  style={{ background: "none", border: "none", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}
                  onClick={() => setShowItemDetails(false)}
                >
                  &times;
                </button>
              </div>

              <div className="entries-form-group">
                <label htmlFor="quantity" className="entries-form-label">
                  Quantity
                </label>
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

              <button type="button" className="btn-primary" onClick={handleAddItem}>
                Add Item
              </button>
            </div>
          )}

          <div className="selected-items">
            <h4>Selected Items</h4>
            {formData.selectedItems.map((item) => (
              <div key={item.itemId} className="item-entry">
                <span>{`${item.itemName} - Quantity: ${item.quantity}, Price: ₹${item.price}`}</span>
                <button type="button" className="btn-cancel" onClick={() => handleRemoveItem(item.itemId)}>
                  Cancel
                </button>
              </div>
            ))}
          </div>

          <div className="entries-form-group">
            <label htmlFor="totalPrice" className="entries-form-label">
              Total Cost
            </label>
            <input type="text" id="totalPrice" name="totalPrice" className="entries-form-input" value={`₹${formData.totalPrice}`} readOnly />
          </div>

          <button type="submit" className="btn-submit">
            Add IPD Items
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsumedItemsForm;
