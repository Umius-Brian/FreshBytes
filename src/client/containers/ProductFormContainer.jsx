import React from 'react';
import '../stylesheets/app.css';
import ProductForm from "../components/ProductForm.js";

function ProductFormContainer() {
  return (
    <div className="productForm">
      <ProductForm />
    </div>
  )
}

export default ProductFormContainer;