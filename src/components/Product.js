import React from 'react';

const Product = (props) => {
  const { product } = props;
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="small" />
      <h2>{product.name}</h2>
      <div>Php: {product.price.toFixed(2)}</div>
      <div>
        <button type="button">Add Cart</button>
      </div>
    </div>
  );
};

export default Product;
