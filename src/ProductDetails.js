import React from 'react';

function ProductDetails({ product, onBack }) {
  return (
    <div className="productDetails">
      <button onClick={onBack} className="backButton">Back to Products</button>
      <img src={product.image} alt={product.title} />
      <div className="info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p className="category">Category: {product.category}</p>
        <p className="price">Price: ${product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetails;


