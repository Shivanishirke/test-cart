import React from 'react';

function Product({ name, addToCart }) {
  return (
    <div className="product">
      <h3>{name}</h3>
      <button onClick={() => addToCart(name)}>Add to Cart</button>
    </div>
  );
}

export default Product;