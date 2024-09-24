import React, { useState, useEffect } from "react";
import CustomerSelection from "./CustomerSelection";
import BillingAddress from "./BillingAddress";
import InvoiceDetails from "./InvoiceDetails";
import ItemEntry from "./ItemEntry";
import InvoiceSummary from "./InvoiceSummary";

function InvoiceForm() {
  // State for invoice form fields
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [billingAddress, setBillingAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("IN--" + Math.floor(Math.random() * 100000));
  const [invoiceDate, setInvoiceDate] = useState("");
  const [stateOfSupply, setStateOfSupply] = useState("");
  const [items, setItems] = useState([]);
  const [totalBeforeTax, setTotalBeforeTax] = useState(0);
  const [totalAfterTax, setTotalAfterTax] = useState(0);
  const [roundOff, setRoundOff] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);

  
  useEffect(() => {
    let totalBefore = 0;
    let totalAfter = 0;

    items.forEach((item) => {
      const totalItemBeforeTax = item.quantity * item.unitPrice;
      const discountAmount = totalItemBeforeTax * (item.discount / 100);
      const taxableAmount = totalItemBeforeTax - discountAmount;
      const taxAmount = taxableAmount * (item.tax / 100);
      const totalItemAfterTax = taxableAmount + taxAmount;

      totalBefore += totalItemBeforeTax;
      totalAfter += totalItemAfterTax;
    });

    setTotalBeforeTax(totalBefore);
    setTotalAfterTax(totalAfter);
    setFinalTotal(Math.round(totalAfter + roundOff));
  }, [items, roundOff]);


  const handleSelectCustomer = async (customerId) => {
    //console.log(customerId)
    const res = await fetch(`http://localhost:3000/api/customers/${customerId}`);
    const data = await res.json();
    //console.log("data",data)
    setSelectedCustomer(data);
    setBillingAddress(data.billingAddress);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("select")
    const invoiceData = {
      customer: selectedCustomer._id,
      invoiceNumber,
      invoiceDate,
      stateOfSupply,
      items,
      totalAmount: totalAfterTax,
      roundOff,
      finalTotal,
    };
   console.log("data",invoiceData)
    const res = await fetch("http://localhost:3000/api/invoices", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(invoiceData),
    });

    const result = await res.json();
    console.log("Invoice", result);
    alert("Invoice generated.....");
  };

  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold mb-6">Create Invoice</h1>

     
      <div className="bg-gray-50 p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-medium  mb-4">Customer Details</h2>
        <CustomerSelection onSelectCustomer={handleSelectCustomer} />
      </div>

      {selectedCustomer && (
        <div className="bg-gray-50 p-4 rounded-lg shadow mb-6">
          <h2 className="text-xl font-medium  mb-4"> Address</h2>
          <BillingAddress customer={selectedCustomer} />
        </div>
      )}

     <div className="bg-gray-50 p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-medium mb-4">Invoice Details</h2>
        <InvoiceDetails
          invoiceNumber={invoiceNumber}
          setInvoiceDate={setInvoiceDate}
          setStateOfSupply={setStateOfSupply}
        />
      </div>

      <div className="bg-gray-50 p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-medium  mb-4">Items</h2>
        <ItemEntry items={items} setItems={setItems} />
      </div>

      <div className="bg-gray-50 p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-medium mb-4">Invoice Summary</h2>
        <InvoiceSummary
          totalBeforeTax={totalBeforeTax}
          totalAfterTax={totalAfterTax}
          roundOff={roundOff}
          finalTotal={finalTotal}
        />

       <div className="mt-4">
          <label className="block text-xl font-medium mb-4">Round Off:</label>
          <input
            type="number"
            value={roundOff}
            onChange={(e) => setRoundOff(parseFloat(e.target.value) || 0)}
            className="border rounded-lg p-2 mt-2 w-[50%]"
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium text-lg transition-all"
      >
        Submit Invoice
      </button>
    </div>
  );
}

export default InvoiceForm;
