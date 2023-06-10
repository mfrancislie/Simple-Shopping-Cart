import React from 'react';

const Product = (props) => {
  const { item, product, onAdd, onRemove } = props;
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="small" />
      <h2>{product.name}</h2>
      <div>Php: {product.price.toFixed(2)}</div>
      <div>
        {item ? (
          <div>
            <button className="remove" onClick={() => onRemove(item)}>
              -
            </button>
            <span className="p-1">{item.qty}</span>
            <button className="add" onClick={() => onAdd(item)}>
              +
            </button>
          </div>
        ) : (
          <button type="button" onClick={() => onAdd(product)}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
