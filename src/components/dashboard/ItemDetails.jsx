import React from 'react';
import '/src/assets/css/Dashboard.css';
import DataTable from '../reusable/DataTable';
import { useNavigate } from 'react-router-dom';


const ItemDetails = () =>{ 
    const itemData = {
        headers: [
            { key: 'itemTypeId', label: 'Item Type ID' },
            { key: 'discountPercentage', label: 'Discount Percentage' },
            { key: 'creationDate', label: 'Creation Date' },
            { key: 'adminId', label: 'Admin ID' },
            { key: 'status', label: 'Status' },
        ],
        rows: [
            {
            itemTypeId: 301,
            discountPercentage: 10,
            creationDate: '01/12/2024',
            adminId: 1,
            status: 'Active',
            },
            {
            itemTypeId: 302,
            discountPercentage: 15,
            creationDate: '05/12/2024',
            adminId: 2,
            status: 'Inactive',
            },
            {
            itemTypeId: 303,
            discountPercentage: 20,
            creationDate: '10/12/2024',
            adminId: 3,
            status: 'Active',
            },
            {
            itemTypeId: 304,
            discountPercentage: 5,
            creationDate: '15/12/2024',
            adminId: 1,
            status: 'Active',
            },
            {
            itemTypeId: 305,
            discountPercentage: 25,
            creationDate: '20/12/2024',
            adminId: 2,
            status: 'Inactive',
            },
        ],
    };

    const navigate = useNavigate();
      const handleOnClick = ()=>{
        navigate('/dashboard/item-details/add');
      }

    return(
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
                fontStyle: 'bold'
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
