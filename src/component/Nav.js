import React from 'react';
import './Nav.css';

export default function Nav() {
  return (
    <nav className={`nav`}>
      <div className="nav-logo" onClick={() => window.location.reload()}>
        Shop
      </div>
      <div className="members-container">
        <div className="nav-cart">cart</div>
        <div className="nav-member">member</div>
        <div className="nav-logout">logout</div>
      </div>
    </nav>
  );
}
