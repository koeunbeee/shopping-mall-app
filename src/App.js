import './App.css';
import React from 'react';
import Nav from './component/Nav';
import Login from './component/Login';
import ProductsList from './component/ProductsList';
import Product from './component/Product';
import Cart from './component/Cart';

function App() {
  return (
    <div className="app-container">
      <Nav />
      <ProductsList />
      <Login />
      <Cart />
      <Product />
      <header className="header"></header>
    </div>
  );
}

export default App;
