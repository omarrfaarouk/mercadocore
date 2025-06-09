import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/categories/')
      .then(response => {
        console.log('Fetched categories:', response.data);
        setCategories(response.data);
      })
      .catch(error => console.error('Error fetching categories:', error));

    axios.get('http://127.0.0.1:8000/api/products/')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      name,
      description,
      price,
      category_id: categoryId
    };

    axios.post('http://127.0.0.1:8000/api/products/', productData)
      .then(response => {
        setProducts([...products, response.data]);
        setName('');
        setDescription('');
        setPrice('');
        setCategoryId('');
      })
      .catch(error => console.error('Error adding product:', error));
  };

  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/products/${id}/`)
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(error => console.error('Error deleting product:', error));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product Categories</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>

      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product name</label><br />
          <input value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label>Description</label><br />
          <input value={description} onChange={e => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Price</label><br />
          <input
            type="number"
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category</label><br />
          <select
            value={categoryId}
            onChange={e => setCategoryId(e.target.value)}
            required
          >
            <option value="">-- Select Category --</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Add Product</button>
      </form>

      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price} ({product.category.name})
            <button
              onClick={() => handleDelete(product.id)}
              style={{ marginLeft: '10px', color: 'white', backgroundColor: 'red', border: 'none', padding: '4px 8px', borderRadius: '4px' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
