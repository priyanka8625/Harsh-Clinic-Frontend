import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "/src/assets/css/Form.css";
import { AddItemRecord, UpdateItemRecord } from "../../services/user-service"; // API integration

const ItemsForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const existingItem = location.state?.item || null; // Get item details if updating

  const [formData, setFormData] = useState({
    itemName: "",
    discountPerItem: "",
    price: "",
    description: "",
    stock: "",
    // status: "active",
  });

  // Prefill form if updating
  useEffect(() => {
    if (existingItem) {
      setFormData({
        itemId: existingItem.itemId, // Keep track of itemId for update
        itemName: existingItem.itemName,
        discountPerItem: existingItem.discountPerItem,
        price: existingItem.price,
        description: existingItem.description,
        stock: existingItem.stock,
        status: existingItem.status,
      });
    }
  }, [existingItem]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { itemId, itemName, discountPerItem, price, description, stock, status } = formData;

    if (!itemName.trim()|| stock <= 0) {
      alert("All fields are required and stock must be greater than 0!");
      return;
    }

    const formattedData = {
      ...formData,
      price: Number(price),
      stock: Number(stock),
      discountPerItem: Number(discountPerItem),
    };

    if (isNaN(formattedData.price) || isNaN(formattedData.stock) || isNaN(formattedData.discountPerItem)) {
      alert("Price, Stock, and Discount must be numbers!");
      return;
    }

    console.log("Form Data being sent:", JSON.stringify(formattedData));

    if (existingItem) {
      // Update item
      UpdateItemRecord(formattedData)
        .then((resp) => {
          console.log("Item updated successfully", resp);
          alert("Item updated successfully");
          navigate("/dashboard/item-details");
        })
        .catch((error) => {
          console.error("Error updating item:", error);
          alert("Failed to update item!");
        });
    } else {
      // Add new item
      AddItemRecord(formattedData)
        .then((resp) => {
          console.log("Item added successfully", resp);
          alert("Item added successfully");
          navigate("/dashboard/item-details");
        })
        .catch((error) => {
          console.error("Error adding item:", error);
          alert("Failed to add item!");
        });
    }
  };

  return (
    <div>
      <h6 className="entries-title">{existingItem ? "Update Item" : "Add New Item"}</h6>
      <div className="entries-container">
        <form onSubmit={handleSubmit} className="entries-form">
          <div className="entries-form-group">
            <label htmlFor="itemName" className="entries-form-label">Item Name</label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              className="form-input"
              placeholder="Enter Item Name"
              value={formData.itemName}
              onChange={handleInputChange}
            />
          </div>

          <div className="entries-form-group">
            <label htmlFor="price" className="entries-form-label">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              className="form-input"
              placeholder="Enter Item Price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>

          <div className="entries-form-group">
            <label htmlFor="stock" className="entries-form-label">Stock</label>
            <input
              type="number"
              id="stock"
              name="stock"
              className="form-input"
              placeholder="Enter Item Stock"
              value={formData.stock}
              onChange={handleInputChange}
            />
          </div>

          <div className="entries-form-group">
            <label htmlFor="description" className="entries-form-label">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              className="form-input"
              placeholder="Enter Item Description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="entries-form-group">
            <label htmlFor="discountPerItem" className="entries-form-label">Discount Per Item</label>
            <input
              type="number"
              id="discountPerItem"
              name="discountPerItem"
              className="form-input"
              placeholder="Enter Discount Per Item"
              value={formData.discountPerItem}
              onChange={handleInputChange}
            />
          </div>

          {/* Status Selection */}
   {/* /*       <div className="entries-form-group">
            <h3 className="entries-form-label">Select Status</h3>
            <div className="entries-form-radio">
              <label>
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={formData.status === "active"}
                  onChange={handleInputChange}
                />
                Active
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="status"
                  value="inactive"
                  checked={formData.status === "inactive"}
                  onChange={handleInputChange}
                />
                Inactive
              </label>
            </div>
          </div> */}

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
            {existingItem ? "Update Record" : "Add Record"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ItemsForm;
