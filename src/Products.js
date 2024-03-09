import React, { useEffect, useState } from 'react';
import axios from 'axios'; // If you're using Axios

function Products({ onSelectProduct }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="productsGrid">
      {products.map(product => (
        <div key={product.id} className="productItem" onClick={() => onSelectProduct(product)}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;