import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DataInputFrom = ({ setSubmittedData }) => {
    const [formData, setFormData] = useState({
        itemCode: ''|| 1,
        itemDescription: '',
        umo: '',
        qtyRequired: '',
        population: '',
        purchaseQtyTillDate: '' || "NA",
        issuedQtyTillDate: '' || "NA",
        stockPosition: '' || "NIL",
        lastPurchasePrice: '' ,
        lastPurchaseDate: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process the formData here (e.g., send to an API)
        setSubmittedData(formData);
        // Navigate to the display page after submission
        navigate('/display');
       
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2 className="text-center mb-4">Add Item</h2>


            <div class="mb-3">
                <label className="form-label">Item Code:</label>
                <input type="text" name="itemCode" value={formData.itemCode} onChange={handleChange} className="form-control" />
            </div>

            <div className="md-3">
                <label className="form-label">Item Description:</label>
                <input type="text" name="itemDescription" value={formData.itemDescription} onChange={handleChange} className="form-control" />
            </div>
            <div class="mb-3">

            </div>
            <div class="mb-3 ">
                <label className="form-label">UMO:</label>
                <input type="text" name="umo" value={formData.umo} onChange={handleChange} className="form-control" />
            </div>

            <div class="mb-3">
                <label className="form-label">Qty Required:</label>
                <input type="number" name="qtyRequired" value={formData.qtyRequired} onChange={handleChange}
                    className="form-control"
                />
            </div>

            <div className="md-3">
                <label className="form-label">Population:</label>
                <input
                    type="text"
                    name="population"
                    value={formData.population}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div class="mb-3">

            </div>
            <div class="mb-3 ">
                <label className="form-label">Purchase Qty Till Date:</label>
                <input
               
                    type="number"
                    name="purchaseQtyTillDate"
                    value={formData.purchaseQtyTillDate}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>

            <div className="md-3">
                <label className="form-label">Issued Qty Till Date:</label>
                <input
                    type="number"
                    
                    name="issuedQtyTillDate"
                    value={formData.issuedQtyTillDate}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div class="mb-3">

            </div>
            <div class="mb-3 ">
                <label className="form-label">Stock Position:</label>
                <input
                
                    type="number"
                    name="stockPosition"
                    value={formData.stockPosition}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>

            <div className="md-3">
                <label className="form-label">Last Purchase Price:</label>
                <input
                    type="text"
                    name="lastPurchasePrice"
                    value={formData.lastPurchasePrice}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div class="mb-3">

            </div>
            <div class="mb-3 ">
                <label className="form-label">Last Purchase Date:</label>
                <input
                    type="date"
                    defaultValue={"1st TIME"}
                    name="lastPurchaseDate"
                    value={formData.lastPurchaseDate}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>



            <div className="text-center">
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default DataInputFrom;
