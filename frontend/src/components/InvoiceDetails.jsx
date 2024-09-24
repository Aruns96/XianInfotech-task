function InvoiceDetails({ invoiceNumber, setInvoiceDate, setStateOfSupply }) {
    return (
      <div  className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col">
            <label  className=" font-medium mb-2">Invoice Number: {invoiceNumber}</label>
            <input className="p-2 border rounded-lg bg-gray-200 " type="date" onChange={(e) => setInvoiceDate(e.target.value)} />
        </div>
        <div className="flex flex-col">
        <label className=" font-medium mb-2">State of Supply:</label>
        <select className="p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400" onChange={(e) => setStateOfSupply(e.target.value)}>
          <option value="State1">State1</option>
          <option value="State2">State2</option>
        </select>
        </div>
        
      </div>
    );
  }
  
  export default InvoiceDetails;
  