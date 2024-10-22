import React from 'react'

function Table({ data }) {
   
console.log(data);
    return (
        <div>

            <div className="header">
                {/* <h2>MAHARASHTRA VIDYUT NIGAM PVT. LTD.</h2>
                <h3>SITE OFFICE: DEOLI (WARDHA)</h3>
                <p><strong>PURCHASE REQUISITION (INDENT)</strong></p> */}
                <h5>MAHARASHTRA VIDYUT NIGAM PVT. LTD.</h5>
                <h5>SITE OFFICE : DEOLI (WAEDHA)</h5>
                <h5 className='underLine'>PURCHASE REQUISITION</h5>
                <h5 className='top-10 underLine'>(INDENT)</h5>


                <div className='container'>
                    <div className="left-side">
                        <p><strong>Nature of Indent:</strong> MOST URGENT</p>
                        <p><strong>Budget Head:</strong> MECHANICAL</p>
                    </div>

                    <div className="right-side">
                        <p><strong>P.R. No. /</strong> 086 / </p>
                        <p><strong>Date:</strong> 09/10/2024</p>
                    </div>
                </div>


            </div>

            <table className="indent-table">
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>ITEM CODE</th>
                        <th>Item Description / Name of Manufacturer</th>
                        <th>UOM</th>
                        <th>Qty. Required</th>
                        <th>Population</th>
                        <th>Purchase Qty. Till Date</th>
                        <th>Issued Qty. Till Date</th>
                        <th>Stock Position</th>
                        <th>Last Purchase Price</th>
                        <th>Last Purchase Date</th>
                    </tr>
                </thead>
                <tbody>
                    
                        <tr>
                            <td>1</td>
                            <td>{data.itemCode }</td>
                            <td>{data.itemDescription}</td>
                            <td>{data.umo || "MT"}</td>
                            <td>{data.qtyRequired || 0.378}</td>
                            <td>{data.population || "CHP General Use"}</td>
                            <td>{data.purchaseQtyTillDate || "NA"}</td>
                            <td>{data.issuedQtyTillDate || "NA"}</td>
                            <td>{data.stockPosition || "NIL"}</td>
                            <td>{data.lastPurchasePrice || "1st TIME"}</td>
                            <td>{data.lastPurchaseDate || "1st TIME"}</td>
                        </tr>
               
                </tbody>
            </table>


            <div className="footer">
                <div className="signature">
                    <div>Signature of Store Officer</div>
                    <div>Indent By</div>
                    <div>HOD</div>
                    <div>Sanctioned By</div>
                </div>
            </div>
        </div>
    )
}

export default Table