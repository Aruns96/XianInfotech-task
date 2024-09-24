import { useState, useEffect } from 'react';

function CustomerSelection({ onSelectCustomer }) {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/customers')
      .then((res) => res.json())
      .then((data) => {
       // console.log("data",data)
        setCustomers(data)
      });
  }, []);

  return (
    <div className="flex flex-col">
      <label className="font-medium mb-2">Select Customer:</label>
      <select onChange={(e) => onSelectCustomer(e.target.value)} className="p-2 border rounded-lg max-w-[50%] focus:outline-none focus:ring-2 focus:ring-blue-400">
        {customers.map((customer) => (
          <option key={customer._id} value={customer._id}>
            {customer.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CustomerSelection;
