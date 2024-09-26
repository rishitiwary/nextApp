import React from "react";
import logo from "../../asserts/images/grozep_logo_black.svg";
import signature from "../../asserts/images/signature.jpeg";
const InvoiceViewer = ({ invoiceData }) => {
  const generateInvoiceContent = () => {
    if (!invoiceData) return "";

    const {
      invoiceId,
      name,
      phone,
      phoneAlt,
      storePhone,
      orderDateTime,
      billingInfo,
      storeAddress,
      orderItem,
      address,
      gstNumber,
      headQuater,
      companyName,
    } = invoiceData;
    const productsBySlab = orderItem.reduce((acc, product) => {
      const { beforeTax, gst, quantity, cgst, sgst } = product;
      const subtotal = beforeTax * quantity;

      if (!acc[gst]) {
        acc[gst] = {
          totalAmount: 0,
          totalCGST: 0,
          totalSGST: 0,
        };
      }
      acc[gst].totalAmount += subtotal;
      acc[gst].totalCGST += (cgst * subtotal) / 100; // Corrected from cgst * totalAmount
      acc[gst].totalSGST += (sgst * subtotal) / 100; // Corrected from sgst * totalAmount

      return acc;
    }, {});
    // Format total CGST and total SGST for display
    const formattedProductsBySlab = Object.entries(productsBySlab).map(
      ([slab, { totalAmount, totalCGST, totalSGST }]) => ({
        slab,
        totalAmount: totalAmount.toFixed(2), // Format to 2 decimal places
        totalCGST: totalCGST.toFixed(2), // Format to 2 decimal places
        totalSGST: totalSGST.toFixed(2), // Format to 2 decimal places
      })
    );
    let orderItemsContent = "";
    orderItem.forEach((item, index) => {
      orderItemsContent += `
        <tr>
          <td>${index + 1}</td>
          <td>${item.itemName}, ${item.size}</td>
          <td>${item.hsnCode}</td>
          <td>₹${item.mrp}</td>
          <td>₹${item.price}</td>
          <td>${item.quantity}</td>
          <td>${item.gst}%</td>
          <td>₹${(item.quantity * item.price).toFixed(2)}</td>
        </tr>
      `;
    });

    return `
    <html>
    <head>
      <title>Print Invoice</title>
      <style>
      body{
        font-family:Arial,sans-serif;
      }
      .image{
        text-align:center;
        font-size:20px;
        font-weight:600;
      }
      .invoice-details{
        display:flex;
        justify-content:space-between;
        padding-left:50px;
        padding-right:25px;
        font-size:20px;
      }
      .invoice-details-footer{
        display:flex;
        justify-content:space-between;
        padding-left:30px;
        padding-right:55px;
        font-size:20px;
        font-weight:600;
      }
      .left-content{
        text-align:left;
        disply:flex;
      }
      .right-content{
        text-align:right;
      }
      .right-content-footer{
        text-align:center;
      }
      .table{
        width:100%;
        border-collapse:collapse;
      }
      table th{
        border-top:2px solid black;
        border-bottom: 2px solid black;
      }
      table th, .table td{
        padding:8px;
        text-align:center;
      }
      .divider{
        border:1px solid;
        width:129px;
      }
      .div_wrap{
        display:flex;
        justify-content:end;
      }
      .total_amount{
        text-align:end;
        padding-right:32px;
        padding-top:10px;
      }
      .gst{
        display:flex;
        justify-content:end;
        gap:55px;
        padding-right:16px;
        line-height:0px;
      }
      .final_total{
        display:flex;
        justify-content:end;
        gap:60px;
        padding-right:35px;
        font-weight:600;
      }
      .div_line{
        border:1px solid;
      }
      .acc_details{
        display:flex;
        line-height:0px;
      }
      .acc_details_total{
        display:flex;
        padding-left:30px;
      }
      .details_heading{
        width:150px;
        font-size:16px;
        font-weight:700;
      }
      .details_heading_header{
        width:130px;
        font-size:16px;
        font-weight:700;
      }
      .acc_details_section{
        display: flex;
        justify-content: space-around;
      }
      .gst-heading{
        font-weight:bold;
      }
      .footer{
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        padding-left: 30px;
        padding-right: 20px
      }
      .footer-name{
        text-align:end;
        padding-right:20px;
      }
      .greeting{
        text-align: center;
        font-weight: 600;
        line-height: 5px;
        font-size:20px;
      }
      .flex-container {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }
      .border {
       width:2px;
       background-color:black;
      }          
      .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size:16px;
        font-weight:600;
      }
      .left{
        margin-top:10px;
        margin-bottom:10px;
      }
      .details_value{
        font-size:16px;
      }
      </style>
    </head>
    <body>
      <!-- Add your invoice content here -->
      <div class="image">
      <h2>Tax Invoice</h2>
      <img src=${logo} alt="" />
        <p>${headQuater}</p>
        <p>${storeAddress}</p>
        <p>(Buy4earn Retail Pvt Ltd)</p>
        <p>GSTIN/NO : ${gstNumber}</p>
      </div>
      <div class="invoice-details">
        <div class="left-content">
        <div class="acc_details">
        <p class="details_heading_header">  Invoice No </p><p class="details_value"> :&nbsp; ${invoiceId}</p>
      </div>
      <div class="acc_details">
      <p class="details_heading_header"> Date and Time </p><p class="details_value"> :&nbsp; ${orderDateTime}</p>
    </div>
          <div class="acc_details">
            <p class="details_heading_header"> Buyer </p><p class="details_value"> :&nbsp; ${name}</p>
          </div>
          <div class="acc_details">
            <p class="details_heading_header"> Phone No</p><p class="details_value">:&nbsp; ${phone}
          </div>
          <div class="acc_details">
            <p class="details_heading_header"> Alternet Mobile</p><p class="details_value"> :&nbsp; ${phoneAlt} </p>
          </div>
          <div class="acc_details">
            <p class="details_heading_header"> Payment Type</p><p class="details_value"> :&nbsp; ${
              billingInfo.paymentType
            }</p>
          </div>
          <div class="acc_details">
            <p class="details_heading_header"> Address </p><p class="details_value">:&nbsp; ${address}</p>
          </div>
        </div>
      </div>

      <div class="line"></div>
      <!-- More invoice details -->
      <table class="table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Product</th>
            <th>HSN Code</th>
            <th>MRP</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>GST</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          ${orderItemsContent}
        </tbody>
      </table>
      <div class="div_line"></div>

<div class="final_total">
<p> Total </p>

<p> ₹${billingInfo.subTotal} </p>
</div>

<div class="div_line"></div>

<div class="acc_details_section">

<div class="left">
<div class="acc_details">
<p class="details_heading"> Total Amount </p><p> : ₹${billingInfo.itemTotal.toFixed(
      2
    )}</p>
</div>
<div class="acc_details">
<p class="details_heading"> Sub Total Amount </p><p> : ₹${billingInfo.subTotal.toFixed(
      2
    )}</p>
</div>
<div class="acc_details">
<p class="details_heading"> Delivery Charge </p><p> : ₹${
      billingInfo.deliveryCharge
    }</p>
</div>
<div class="acc_details">
<p class="details_heading"> Coupon  Amount </p><p> : ₹${
      billingInfo.promoDiscount
    }</p>
</div>
<div class="acc_details">
<p class="details_heading"> Loyalty Points </p><p> : ₹${
      billingInfo.loyaltyPoints
    }</p>
</div>
<div class="acc_details">
<p class="details_heading"> Points </p><p> : ₹${billingInfo.point}</p>
</div>
<div class="acc_details">
<p class="details_heading"> Return Amount </p><p> : ₹${
      billingInfo.returnPoint
    }</p>
</div>
<div class="acc_details">
<p class="details_heading"> Payable Amount </p><p> : ₹${billingInfo.grandTotal.toFixed(
      2
    )}</p>
</div>
</div>
<div class="border"></div>
<div class="right">
        <table style="margin: auto;">
                <thead>
                    <tr>
                        <th>Tax Rate</th>
                        <th>Taxable Amt</th>
                        <th>CGST Amt</th>
                        <th>SGST Amt</th>
                    </tr>
                </thead>
                <tbody>
                <!-- Table rows for total CGST and total SGST -->
                ${formattedProductsBySlab
                  .map(
                    ({ slab, totalAmount, totalCGST, totalSGST }) => `
                    <tr>
                        <td style="text-align: center;">${slab}%</td>
                        <td style="text-align: center;">₹${totalAmount}</td>
                        <td style="text-align: center;">₹${totalCGST}</td>
                        <td style="text-align: center;">₹${totalSGST}</td>
                    </tr>
                `
                  )
                  .join("")}
                <!-- Line -->
                <tr>
                <td colspan="4" style="border-top: 2px solid black;"></td>
            </tr>
                <!-- Table row for sum totalAmount, totalCGST, and totalSGST -->
                <tr>
                    <td style="text-align: center;">Total</td>
                    <td style="text-align: center;">₹${formattedProductsBySlab
                      .reduce(
                        (acc, curr) => acc + parseFloat(curr.totalAmount),
                        0
                      )
                      .toFixed(2)}</td>
                    <td style="text-align: center;">₹${formattedProductsBySlab
                      .reduce(
                        (acc, curr) => acc + parseFloat(curr.totalCGST),
                        0
                      )
                      .toFixed(2)}</td>
                    <td style="text-align: center;">₹${formattedProductsBySlab
                      .reduce(
                        (acc, curr) => acc + parseFloat(curr.totalSGST),
                        0
                      )
                      .toFixed(2)}</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>

<div class="div_line"></div>

<div class="footer">
<div>
<p>Terms & Conditions</p>
</div>
<div>
<p> Authorised Signature</p>
</div>
</div>

<div class="footer">
<div>
<p> All invoices due in 7 days from date of issues. All estimates are valid up to 7 days</br>
  from date of issue. No refunds are accepted after delivery!</p>
</div>
<div>
<img src=${signature} alt="" />
</div>
</div>

<div class="footer-name">
<p>For M/s ${companyName}</p>
</div>

<div class="greeting">
<div>
<p>Thank You!</p>
</div>
<div>
<p>Visit Again!</p>
</div>
<div>
    </body>
  </html>
    `;
  };

  return (
    <div
      id="invoice-content" // Add an ID to the outer container
      className="invoice-viewer"
      dangerouslySetInnerHTML={{ __html: generateInvoiceContent() }}
    />
  );
};

export default InvoiceViewer;
