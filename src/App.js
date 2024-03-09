import React, { useState } from 'react';
import Products from './Products';
import ProductDetails from './ProductDetails';
import './App.css'; // Use this to apply styles

function App() {
  // State to keep track of the selected product for details view
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to handle the selection of a product
  const handleSelectProduct = product => {
    setSelectedProduct(product);
  };

  // Function to handle going back to the products grid view
  const handleBack = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="App">
      {selectedProduct ? (
        // Show the product details if a product is selected
        <ProductDetails product={selectedProduct} onBack={handleBack} />
      ) : (
        // Otherwise, show the products grid
        <Products onSelectProduct={handleSelectProduct} />
      )}
    </div>
  );
}

export default App;
