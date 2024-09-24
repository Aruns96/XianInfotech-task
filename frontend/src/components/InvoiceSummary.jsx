function InvoiceSummary({ totalBeforeTax, totalAfterTax, roundOff, finalTotal }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg ">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">Total Before Tax:</span>
          <span>Rs: {totalBeforeTax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">Total After Tax:</span>
          <span>Rs: {totalAfterTax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">Round Off:</span>
          <span>Rs: {roundOff.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-xl font-semibold text-blue-700 mt-4">
          <span>Final Total:</span>
          <span>Rs: {finalTotal.toFixed(2)}</span>
        </div>
      </div>
    );
  }
  
  export default InvoiceSummary;
  