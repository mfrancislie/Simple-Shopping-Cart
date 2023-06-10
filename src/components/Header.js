import React from 'react';

const Header = () => {
  return (
    <header className="row block center">
      <a href="#/">
        <h1>Shopping Cart</h1>
      </a>

      <div>
        <a href="#/cart">Cart</a> <a href="#/signup">Signup</a>
      </div>
    </header>
  );
};

export default Header;
