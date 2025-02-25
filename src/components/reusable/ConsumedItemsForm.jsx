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
  //  quantity:"",
    //itemId:""

  });

  // item name varun item id ghyaychay

  const [itemList, setItemList] = useState([]); // Store fetched items
  const [showItemDetails, setShowItemDetails] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    itemType: "",
    quantity: "",
    price: 0,
  });


  console.log("data being sent",formData)
  // Fetch item list from API
  useEffect(() => {
    axios
      .get("http://localhost:8086/item/all") // Replace with actual API
      .then((response) => {
        if (response.data) {
          setItemList(response.data); // Assuming response is an array of objects { id, name, price }
        }
      })
      .catch((error) => {
        console.error("Error fetching items:", error);
      });
  }, []);

  const handleItemChange = (e) => {
    const { name, value } = e.target;

    if (name === "itemType") {
      const selectedItem = itemList.find((item) => item.name === value);
      setCurrentItem({
        itemType: value,
        itemId: selectedItem ? selectedItem.id : "", // Store item ID
        quantity: "",
        price: selectedItem ? selectedItem.price : 0,
      });
    }
    else {
      setCurrentItem((item) => ({
        ...item,
        [name]: value,
      }));
    }
  };

  const handleAddItem = () => {
    if (!currentItem.itemType || !currentItem.quantity) {
      alert("Please fill in all fields for the item.");
      return;
    }

    const newItem = {
      ...currentItem,
      quantity: parseFloat(currentItem.quantity), // Fix here
    };
    

    setFormData((data) => {
      const updatedItems = [...data.selectedItems, newItem];
      const updatedCost = updatedItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );

      return {
        ...data,
        selectedItems: updatedItems,
        totalPrice: updatedCost,
      };
    });

    setCurrentItem({ itemType: "", quantity: "", price: 0 });
    setShowItemDetails(false);
  };

  const handleRemoveItem = (index) => {
    setFormData((data) => {
      const updatedItems = data.selectedItems.filter((_, i) => i !== index);
      const updatedCost = updatedItems.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );

      return {
        ...data,
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

    // Format data for submission
    const formattedData = {
      ipdId: formData.ipdId,
      selectedItems: formData.selectedItems.map((item) => ({
        itemName: item.itemType.replace(/^"|"$/g, ''),
                  quantity: item.quantity,
          price: item.price,
      })),
      totalPrice: formData.totalPrice,
  };
  
      console.log("Data:",formattedData)

          // Submit data using Axios
      AddConsumedItemRecord(formattedData) // Replace with actual API
      .then((resp) => {
        console.log("Item Record added successfully", resp);
        alert("Data submitted successfully!");
        window.history.back();//go back to prev page
      //  setFormData({ ipdId, selectedItems: [], totalCost: 0, }); // Reset form
      })
      .catch((error) => {
        console.error("Error adding item:", error);
        alert("Failed to submit data!");
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
            <label htmlFor="itemType" className="entries-form-label">
              Select Item Type
            </label>
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
              {itemList.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
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

              <button
                type="button"
                style={{
                  marginTop: "10px",
                  border: "1px solid #6C63FE",
                  backgroundColor: "#6C63FE",
                  color: "#fff",
                  cursor: "pointer",
                  borderRadius: "5px",
                  padding: "10px 20px",
                }}
                onClick={handleAddItem}
              >
                Add Item
              </button>
            </div>
          )}

          <div className="selected-items">
            <h4>Selected Items</h4>
            {formData.selectedItems.map((item, index) => (
              <div key={index} className="item-entry">
                <span>{`${item.itemType} - Quantity: ${item.quantity}, Price: ₹${item.price}`}</span>
                <button
                  type="button"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    marginLeft: "10px",
                    color: "blue",
                  }}
                  onClick={() => handleRemoveItem(index)}
                >
                  Cancel
                </button>
              </div>
            ))}
          </div>

          <div className="entries-form-group">
            <label htmlFor="totalPrice" className="entries-form-label">
              Total Cost
            </label>
            <input
              type="text"
              id="totalPrice"
              name="totalPrice"
              className="entries-form-input"
              value={`₹${formData.totalPrice}`}
              readOnly
            />
          </div>

          <button
            style={{
              marginTop: "30px",
              padding: "10px 20px",
              border: "1px solid #6C63FE",
              backgroundColor: "#6C63FE",
              color: "#fff",
              cursor: "pointer",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              width: "100%",
            }}
            type="submit"
          >
            Add IPD Items
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsumedItemsForm;
