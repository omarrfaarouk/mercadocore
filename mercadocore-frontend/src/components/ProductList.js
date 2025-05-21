import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <strong>{product.name}</strong> - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
