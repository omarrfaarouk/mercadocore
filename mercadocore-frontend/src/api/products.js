const API_BASE_URL = 'http://localhost:8000/api';

export async function fetchProducts() {
  const response = await fetch(`${API_BASE_URL}/products/`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
}
