import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '/src/assets/css/Dashboard.css';
import DataTable from '../reusable/DataTable';
import { useNavigate } from 'react-router-dom';

const ItemDetails = () => {
  // State to store item data
  const [itemData, setItemData] = useState({
    "headers": [
      { "key": "itemId", "label": "Item ID" },
      { "key": "itemName", "label": "Item Name" },
      { "key": "price", "label": "Price" },
      { "key": "description", "label": "Description" },
      { "key": "stock", "label": "Stock" },
      { "key": "adminId", "label": "Admin ID" },
      { "key": "actions", "label": "Actions" }
    ],
    "rows": [
      {
        "itemId": "101",
        "itemName": "Wireless Mouse",
        "price": "15.99",
        "description": "Ergonomic wireless mouse with long battery life",
        "stock": "25",
        "adminId": "A001",
        "actions": ["Update item", "Delete item"]
      },
      {
        "itemId": "102",
        "itemName": "Mechanical Keyboard",
        "price": "49.99",
        "description": "RGB backlit mechanical keyboard with blue switches",
        "stock": "15",
        "adminId": "A002",
        "actions": ["Update item", "Delete item"]
      },
      {
        "itemId": "103",
        "itemName": "Gaming Headset",
        "price": "29.99",
        "description": "Surround sound gaming headset with noise cancellation",
        "stock": "30",
        "adminId": "A003",
        "actions": ["Update item", "Delete item"]
      }
    ]
  }
  );

  const navigate = useNavigate();

  // Function to fetch item data using axios
  const getAllItems = async () => {
    try {
      const response = await axios.get('http://localhost:8086/item/all'); 
      console.log("API Response:", response.data); // Debugging output
  
      setItemData((prevData) => ({
        ...prevData,
        rows: response.data, 
      }));
    } catch (error) {
      console.error("Error fetching item data:", error);
    }
  };
  

  // Fetch item data on component mount
  useEffect(() => {
    getAllItems();
  }, []);

  // Navigate to add item page
  const handleOnClick = () => {
    navigate('/dashboard/item-details/add');
  };

  return (
    <>
      <h1>Item Details Section</h1>
      <button
        style={{
          marginTop: '30px',
          marginLeft: '30px',
          padding: '10px 20px',
          border: '1px solid #6C63FE',
          backgroundColor: '#6C63FE',
          color: '#fff',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
          borderRadius: '5px',
          fontSize: '16px',
          fontStyle: 'bold',
        }}
        onClick={handleOnClick}
      >
        Add record
      </button>
      <DataTable data={itemData} />
    </>
  );
};

export default ItemDetails;
