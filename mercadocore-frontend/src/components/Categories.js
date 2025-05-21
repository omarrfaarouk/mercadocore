import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/categories/')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.length === 0 && <p>No categories found.</p>}
        {categories.map((cat, index) => (
          <li key={index} className="bg-gray-100 p-2 rounded">
            {cat.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
