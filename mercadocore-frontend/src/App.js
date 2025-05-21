import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch categories
    axios.get('http://127.0.0.1:8000/api/categories/')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));

    // Fetch products
    axios.get('http://127.0.0.1:8000/api/products/')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Categories</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>

      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price} ({product.category.name})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
