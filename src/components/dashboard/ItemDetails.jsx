import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '/src/assets/css/Dashboard.css';
import DataTable from '../reusable/DataTable';
import { useNavigate } from 'react-router-dom';

const ItemDetails = () => {
  // State to store item data
  const [itemData, setItemData] = useState({
    headers: [
      { key: 'itemId', label: 'Item ID' },
      { key: 'itemName', label: 'Item Name' },
      { key: 'price', label: 'Price' },
      {key :'discountPerItem', label:'discount'},
      { key: 'description', label: 'Description' },
      { key: 'stock', label: 'Stock' },
      { key: 'adminId', label: 'Admin ID' },
      { key: 'actions', label: 'Actions' },
    ],
    rows: [],
  });

  const navigate = useNavigate();

  // Function to fetch item data using axios
  const fetchItemData = async () => {
    try {
      const response = await axios.get('http://harsh-2onb.onrender.com/item/all',{
        withCredentials: true,
      });
      const rowsWithActions = response.data.map((row) => ({
        ...row,
        actions: ['Update item', 'Delete item'],
      }));

      setItemData((prevData) => ({
        ...prevData,
        rows: rowsWithActions,
      }));
    } catch (error) {
      console.error('Error fetching item data:', error);
    }
  };

  useEffect(() => {
    fetchItemData();
  }, []);

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
          fontWeight: 'bold',
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