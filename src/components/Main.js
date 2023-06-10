import React from 'react';
import Product from './Product';

const Main = (props) => {
  const { products } = props;
  return (
    <div className="col-2 block">
      <h1>Products</h1>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Main;
