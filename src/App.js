import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter(item => item !== product);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div className="product-list">
        <Product name="Product 1" addToCart={addToCart} />
        <Product name="Product 2" addToCart={addToCart} />
        {/* Add more products as needed */}
      </div>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;