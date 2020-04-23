import React from 'react';
import '../stylesheets/app.css';
import ProductsList from '../components/ProductsList.js';
import Product from '../components/Product.js';

function ProductListContainer() {
  return (
    <div className="productList">
      <ProductsList />
      <Product />
    </div>
  )
}

export default ProductListContainer;