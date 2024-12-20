import React from 'react';
import '/src/assets/css/Dashboard.css';
import DataTable from '../reusable/DataTable';


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

    return(
        <>
            <h1>Item Details Section</h1>
            <DataTable data={itemData} />
        </>
    );
};

export default ItemDetails;
