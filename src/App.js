import './App.css';
import { Outlet, Routes, Route } from 'react-router-dom';

import React from 'react';
import Nav from './component/Nav';
import Login from './component/Login';
import ProductsList from './component/ProductsList';
import Product from './component/Product';
import Cart from './component/Cart';

const Layout = () => {
  return (
    <div>
      <Nav />
      <header className="header"></header>
      <Outlet />
    </div>
  );
};
function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="productlist" element={<ProductsList />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
