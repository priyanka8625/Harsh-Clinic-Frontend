import React, { useState } from "react";
import "/src/assets/css/Form.css";
import { AddItemRecord } from "../../services/user-service"; // API integration

const ItemsForm = () => {
  const [formData, setFormData] = useState({
    itemName: "",
    discountPerItem: "",
    price: "",
    description: "",
    stock: "",
    status: "active",
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

    const { itemName, discountPerItem, price, description, stock, status } = formData;

    // Validation
    if (!itemName.trim() || !discountPerItem.trim() || !price.trim() || !stock.trim()) {
      alert("All fields are required!");
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

    AddItemRecord(formattedData)
      .then((resp) => {
        console.log("Item Record added successfully", resp);
        alert("Data submitted successfully!");
      })
      .catch((error) => {
        console.error("Error adding item:", error);
        alert("Failed to submit data!");
      });
  };

  return (
    <div>
      <h6 className="entries-title">Item Entries</h6>
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
          <div className="entries-form-group">
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


// import React, { useState } from "react";
// import "/src/assets/css/Form.css";

// const ItemsForm = () => {
//   const [formData, setFormData] = useState({
//     itemId: "",
//     discountPerItem: "",
//     status: "active", // Default status
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Destructure form data
//     const { itemId, discountPerItem, status } = formData;

//     // Validation
//     if (!itemId.trim() || !discountPerItem.trim() || !status) {
//       alert("All fields are required!");
//       return;
//     }

//     // Successful submission
//     alert("Data submitted successfully!");
//     console.log("Form Data:", formData);
//   };

//   return (
//     <div>
//       {/* Title */}
//       <h6 className="entries-title">Item Entries</h6>

//       {/* Form Container */}
//       <div className="entries-container">
//         <form onSubmit={handleSubmit} className="entries-form">
//           {/* Item ID */}
//           <div className="entries-form-group">
//             <label htmlFor="itemId" className="entries-form-label">
//               Item ID
//             </label>
//             <input
//               type="text"
//               id="itemId"
//               name="itemId"
//               className="form-input"
//               placeholder="Enter Item ID"
//               value={formData.itemId}
//               onChange={handleInputChange}
//             />
//           </div>

//           {/* Discount Per Item */}
//           <div className="entries-form-group">
//             <label htmlFor="discountPerItem" className="entries-form-label">
//               Discount Per Item
//             </label>
//             <input
//               type="number"
//               id="discountPerItem"
//               name="discountPerItem"
//               className="entries-form-input"
//               placeholder="Enter discount per item"
//               value={formData.discountPerItem}
//               onChange={handleInputChange}
//             />
//           </div>

//           {/* Status Selection */}
//           <div className="entries-form-group">
//             <h3 className="entries-form-label">Select Status</h3>
//             <div className="entries-form-radio">
//               <label className="entries-form-radio-label">
//                 <input
//                   type="radio"
//                   name="status"
//                   value="active"
//                   className="entries-form-radio-input"
//                   checked={formData.status === "active"} // Correctly bound
//                   onChange={handleInputChange} // Updates the state
//                 />
//                 Active
//               </label>
//               <br />
//               <label className="entries-form-radio-label">
//                 <input
//                   type="radio"
//                   name="status"
//                   value="inactive"
//                   className="entries-form-radio-input"
//                   checked={formData.status === "inactive"} // Correctly bound
//                   onChange={handleInputChange} // Updates the state
//                 />
//                 Inactive
//               </label>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             style={{
//               marginTop: "30px",
//               padding: "10px 20px",
//               border: "1px solid #6C63FE",
//               backgroundColor: "#6C63FE",
//               color: "#fff",
//               cursor: "pointer",
//               transition: "background-color 0.3s ease",
//               borderRadius: "5px",
//               fontSize: "16px",
//               fontWeight: "bold",
//               width: "100%",
//             }}
//           >
//             Add Record
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ItemsForm;