function ItemEntry({ items, setItems }) {
    const handleAddItem = () => {
        setItems([...items, { name: '', quantity: 1, unitPrice: 0, discount: 0, tax: 0 }]);
      };
    
      const handleChange = (index, key, value) => {
        const updatedItems = [...items];
        updatedItems[index][key] = value;
        setItems(updatedItems);
      };
  
    return (
        <div>
        {items.map((item, index) => (
          <div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-4">
            <div className="flex flex-col">
              <label className=" font-medium mb-2">Item Name</label>
              <input
                type="text"
                value={item.name}
                onChange={(e) => handleChange(index, 'name', e.target.value)}
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex flex-col">
              <label className=" font-medium mb-2">Quantity</label>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleChange(index, 'quantity', parseInt(e.target.value))}
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div className="flex flex-col">
              <label className=" font-medium mb-2">Unit Price</label>
              <input
                type="number"
                value={item.unitPrice}
                onChange={(e) => handleChange(index, 'unitPrice', parseFloat(e.target.value))}
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div className="flex flex-col">
              <label className=" font-medium mb-2">Discount (%)</label>
              <input
                type="number"
                value={item.discount}
                onChange={(e) => handleChange(index, 'discount', parseFloat(e.target.value))}
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
  
            <div className="flex flex-col">
              <label className=" font-medium mb-2">Tax (%)</label>
              <input
                type="number"
                value={item.tax}
                onChange={(e) => handleChange(index, 'tax', parseFloat(e.target.value))}
                className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        ))}
  
        <button
          onClick={handleAddItem}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg  mt-4"
        >
          Add Item
        </button>
      </div>
    );
  }
  
  export default ItemEntry;
  