import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = ({ categories, onProductAdded }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://127.0.0.1:8000/api/products/', {
      name: productName,
      price: parseFloat(price),
      category: selectedCategory
    })
    .then(() => {
      setProductName('');
      setPrice('');
      setSelectedCategory('');
      onProductAdded(); // Refresh product list in parent component
    })
    .catch(error => {
      console.error('Error adding product:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Product name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        {categories.map(cat => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProductForm;
