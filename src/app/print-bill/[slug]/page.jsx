"use client";
import React, { useEffect, useState, useRef } from "react";
import apiList from "@utils/__api__/apiList";
import "./InvoiceViewer.css";
const PrintBill = ({ params }) => {
  const logo = "/assets/imagess/grozep_logo_black.svg";
  const jeweloLogo = "/assets/imagess/jeweloLogo.svg";
  const signature = "/assets/imagess/signature.jpeg";
  const orderid = params.slug;
  const [invoiceData, setInvoiceData] = useState(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [pdfSrc, setPdfSrc] = useState(null); // State to store PDF source
  const [error, setError] = useState(null);

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return;
    }

    const fetchInvoiceData = async () => {
      try {
        const response = await fetch(
          `${apiList.PRINT_BILL}${orderid}`
        );

        if (response.ok) {
          const data = await response.json();
          if (data.status === true) {
            setInvoiceData(data.data);
            setIsGeneratingPDF(true);
            generatePDF(data.data); // Generate PDF immediately after data is fetched
          } else {
            setError("Data not found."); // Set error message if data retrieval is unsuccessful
          }
        } else {
          setError("Failed to fetch invoice data."); // Set error message if response is not OK
        }
      } catch (error) {
        setError("Error fetching data: " + error.message); // Set error message if an error occurs during fetch
      }
    };

    fetchInvoiceData();
  }, []);

  function numberToWords(num) {
    const units = [
      "Zero",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ];
    const teens = [
      "",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];
    const tens = [
      "",
      "",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];
    const scales = ["", "Thousand", "Lakh", "Crore"];

    function convertLessThanThousand(num) {
      let words;
      if (num % 100 < 10) {
        words = units[num % 100];
      } else if (num % 100 < 20) {
        words = teens[num % 10];
      } else {
        words = tens[Math.floor(num / 10) % 10] + " " + units[num % 10];
      }
      if (num >= 100) {
        words = units[Math.floor(num / 100)] + " Hundred " + words;
      }
      return words;
    }

    if (num === 0) {
      return "Zero";
    }

    let words = "";
    for (let i = 0; num > 0; i++) {
      if (num % 1000 !== 0) {
        words =
          convertLessThanThousand(num % 1000) + " " + scales[i] + " " + words;
      }
      num = Math.floor(num / 1000);
    }

    return words.trim();
  }
  function generatePDF(invoiceData) {
    const productsBySlab = invoiceData.orderItem.reduce((acc, product) => {
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

    const totalTaxAmount = Math.round(
      formattedProductsBySlab.reduce(
        (acc, curr) =>
          acc + parseFloat(curr.totalCGST) + parseFloat(curr.totalSGST),
        0
      )
    );
    const totalamounts = Math.round(invoiceData.billingInfo.subTotal);
    const newWindow = window.open("", "_self");
    newWindow.document.open();
    const imagesToLoad = [
      `${invoiceData.storeCode === "JHRNC005" ? jeweloLogo : logo}`,
    ];

    let imagesLoaded = 0;

    function handleImageLoad() {
      imagesLoaded += 1;

      if (imagesLoaded === imagesToLoad.length) {
        newWindow.print();
      }
    }
    newWindow.document.write(`
<html>
  <head>
    <title>Tax Invoice</title>
    <style>
body {
  font-family: Arial, sans-serif;
}
.invoice {
  width: 21cm;
  margin: 0 auto;
  border: 1px solid #ccc;
  padding: 20px;
  background-color: #f9f9f9;
}
.invoice-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.invoice-header img {
  max-width: 150px;
  height: auto;
}
.invoice-info {
  text-align: right;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
th, td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  text-align: left;
}
.total {
  margin-top: 20px;
  float: right;
}
.print-button {
  text-align: center;
  margin-top: 20px;
}
.print-button button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.print-button button:hover {
  background-color: #0056b3;
}
/* Styling for main section */
.div_line {
    border-top: 2px solid black;
    margin-top: 20px;
}

.acc_details_section {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
}

/* Styling for left section (amount details) */
.left {
    width: 45%; /* Adjust width as needed */
}

.acc_details {
    display: flex;
    justify-content: space-between;
    margin-bottom: -10px; 
}

.details_heading {
    font-weight: bold;
}

/* Styling for right section (GST Summary table) */
.right {
    width: 50%; /* Adjust width as needed */
}



  @media print {
  .print-button {
    display: none;
  }
}
</style>
  </head>
  <body>
<div >
<p style="text-align: center;"><b>Tax Invoice</b></p>
<div class="invoice">
<div class="invoice-header">

<div class="company-info">

<img src="${invoiceData.storeCode === "JHRNC005" ? jeweloLogo : logo
      }" alt="Company Logo" onload="window.handleImageLoad && window.handleImageLoad()">
 
  <p>Address: ${invoiceData.storeAddress}</p>
  ${invoiceData.storePhone
        ? `<p>Phone: ${invoiceData.storePhone}</p>`
        : `<p>Phone: +91 8448444943</p>`
      }
  <p>GST No: ${invoiceData.gstNumber}</p>
  ${invoiceData.storeCode == "JHRNC005"
        ? ""
        : ` <p>FSSAI No: 21122112000038</p>`
      }
</div>
<div class="invoice-info">
  <p><b>Invoice #: ${invoiceData.invoiceId}</b></p>
  <p>Store Name : ${invoiceData.storeName}</p>
  <p>Order Date: ${invoiceData.orderDateTime}</p>
  <p>Owner/Buyer: ${invoiceData.name}</p>
  <p>Phone: ${invoiceData.phone}</p>
  <p>Address: ${invoiceData.address}</p>
</div>
</div>
<table>
<thead>
  <tr>
    <th>S.No</th>
    <th>Product & Size</th>
    <th>HSN Code</th>
    <th>MRP</th>
    <th>Rate</th>
    <th>Quantity</th>
    <th>GST</th>
    <th>Total (Rs.)</th>
  </tr>
</thead>
<tbody>
${invoiceData &&
      invoiceData.orderItem
        .map(
          (item, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${item.itemName}, ${item.size}</td>
            <td>${item.hsnCode}</td>
            <td>${item.mrp}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${item.gst}</td>
            <td>${(item.price * item.quantity).toFixed(2)}</td>
        </tr>`
        )
        .join("")
      }
</tbody>
</table>
<div class="total">Total :  ₹ ${totalamounts}</div>
<br/>
<div class="total">Total Amount (inWords): ${numberToWords(totalamounts)}</div>
    <div class="div_line"></div>

<div class="div_line"></div>
<div class="acc_details_section">
    <div class="left">
        <!-- Amount details displayed on the left side -->
        <div class="acc_details">
            <p class="details_heading">Total Amount:</p>
            <p>₹${invoiceData.billingInfo.itemTotal.toFixed(2)}</p>
        </div>
        <div class="acc_details">
        <p class="details_heading">Discount:</p>
        <p>₹${(invoiceData.billingInfo.itemTotal - invoiceData.billingInfo.subTotal).toFixed(2)}</p>
    </div>
        <div class="acc_details">
            <p class="details_heading">Sub Total Amount:</p>
            <p>₹${invoiceData.billingInfo.subTotal.toFixed(2)}</p>
        </div>
        <div class="acc_details">
            <p class="details_heading">Delivery Charge:</p>
            <p>₹${invoiceData.billingInfo.deliveryCharge}</p>
        </div>
        <div class="acc_details">
            <p class="details_heading">Coupon Amount:</p>
            <p>₹${invoiceData.billingInfo.promoDiscount}</p>
        </div>
        <div class="acc_details">
            <p class="details_heading">Buy4earn Point:</p>
            <p>₹${invoiceData.billingInfo.loyaltyPoints}</p>
        </div>
        <div class="acc_details">
            <p class="details_heading">Grozep Point:</p>
            <p>₹${invoiceData.billingInfo.point}</p>
        </div>
        <div class="acc_details">
            <p class="details_heading">Return Amount:</p>
            <p>₹${invoiceData.billingInfo.returnPoint}</p>
        </div>
        <div class="acc_details">
            <p class="details_heading">${invoiceData.billingInfo.paymentType === "prepaid"
        ? "Online Paid Amount"
        : "Payable Amount"
      }:</p>
            <p>₹${totalamounts}</p>
        </div>
    </div>
    <div class="right">
        <!-- Tax summary (GST details) displayed on the right side -->
        <table>
            <caption><b>GST Summary</b></caption>
            <thead>
                <tr>
                    <th>Tax Rate</th>
                    <th>Taxable Amt</th>
                    <th>CGST Amt</th>
                    <th>SGST Amt</th>
                </tr>
            </thead>
            <tbody>
                <!-- Render rows for GST details -->
                ${formattedProductsBySlab
        .map(
          ({ slab, totalAmount, totalCGST, totalSGST }) => `
                        <tr>
                            <td>${slab}%</td>
                            <td>₹${totalAmount}</td>
                            <td>₹${totalCGST}</td>
                            <td>₹${totalSGST}</td>
                        </tr>
                    `
        )
        .join("")}
                <!-- Line separating GST details from total summary -->
                <tr>
                    <td colspan="4" style="border-top: 2px solid black;"></td>
                </tr>
                <!-- Total row summarizing GST details -->
                <tr>
                    <td>Total</td>
                    <td>₹${formattedProductsBySlab
        .reduce(
          (acc, curr) => acc + parseFloat(curr.totalAmount),
          0
        )
        .toFixed(2)}</td>
                    <td>₹${formattedProductsBySlab
        .reduce(
          (acc, curr) => acc + parseFloat(curr.totalCGST),
          0
        )
        .toFixed(2)}</td>
                    <td>₹${formattedProductsBySlab
        .reduce(
          (acc, curr) => acc + parseFloat(curr.totalSGST),
          0
        )
        .toFixed(2)}</td>
                </tr>
                <!-- Add more rows as needed -->
            </tbody>
        </table>
    </div>
</div>


    
<p>Tax Amount (inWords) : INR ${totalTaxAmount.toFixed(2)}(${numberToWords(
          totalTaxAmount.toFixed(2)
        )}).</p>



<!-- Terms and Conditions -->
<div class="terms" style="float: left;  margin-top: 10px;width: 50%;">
  <h3>Terms and Conditions</h3>
  <ul>
      <li>Goods once sold cannot br taken back or exchanged.</li>
      <li>We are not the manufacturers,comapny will stand for warranty as per their terms and conditions. </li>
      <li>Subject to local jurisdiction.</li>
      ${invoiceData.storeCode === 'JHRNC005'
        ? `<li>7 days exchange policy.</li>
       <li>12 month warranty on every imitation jewellery.</li>`
        : ''
      }
  </ul>
</div>

<!-- Authorized Signature -->
<div class="authorized-signature" style="float: right; width: 50%;  margin-top: 10px;text-align: right;">
  <p>Authorized Signature:</p>
  <img src="${signature}" alt="Authorized Signature">
</div>
<div style="clear: both; text-align: center; font-weight: 600;">
<p>You Saved: ₹ ${(invoiceData.billingInfo.itemTotal - invoiceData.billingInfo.subTotal).toFixed(2)}</p>
${invoiceData.earnedPoint > '0'
        ? `<p>You got ${invoiceData.earnedPoint} Point on this purchase</p>`
        : ''
      }
<p>Thanks for shopping! 😊</p>
<p>Visit Again!</p>
 
<div>


<!-- Print Button -->
<div class="print-button" style="clear: both; text-align: center;">
  <button onclick="printBill()">Print Bill</button>
</div>
</div>

</div>

<script>
function printBill() {
window.print();
}

</script>
</body>
</html>
`);
    newWindow.document.close();
    newWindow.handleImageLoad = handleImageLoad;
  }

  return (
    <div className="print-bill-container">
      {/* Render PDF within iframe */}
      {pdfSrc && (
        <iframe
          src={pdfSrc}
          width="100%"
          height="100%"
          title="Printable Invoice"
        />
      )}
      {/* Display error message if error occurs */}
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default PrintBill;
