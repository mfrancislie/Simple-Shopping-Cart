import React from 'react';
import Header from './components/Header';
import Basket from './components/Basket';
import Main from './components/Main';
import data from './data';

const App = () => {
  const { products } = data;
  return (
    <div>
      <Header />
      <div className="row">
        <Main products={products} />
        <Basket />
      </div>
    </div>
  );
};

export default App;
