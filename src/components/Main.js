import React from 'react';

const Main = (props) => {
  const { products } = props;
  return (
    <div className="col-2 block">
      <h1>Products</h1>
      <div className="row">
        {products.map((product) => (
          <h1>{product.name}</h1>
        ))}
      </div>
    </div>
  );
};

export default Main;
