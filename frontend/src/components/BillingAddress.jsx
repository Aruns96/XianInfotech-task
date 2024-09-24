function BillingAddress({ customer }) {
    return (
        <div className="p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-medium">Billing Address</h3>
        <p className="mt-2 ">
          {customer.billingAddress || 'No billing address available'}
        </p>
        <p className="mt-2 ">
          Phone: {customer.phoneNumber || 'N/A'}
        </p>
      </div>
    );
  }
  
  export default BillingAddress;
  