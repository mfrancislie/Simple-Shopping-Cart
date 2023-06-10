import React from 'react';
import Header from './components/Header';
import Basket from './components/Basket';
import Main from './components/Main';

const App = () => {
  return (
    <div>
      <Header />
      <div className="row">
        <Main />
        <Basket />
      </div>
    </div>
  );
};

export default App;
