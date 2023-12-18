import React from 'react';
import './ProductsList.css';

export default function ProductsList() {
  return (
    <div className="list-container">
      <div className="product-list">PRODUCT</div>
      <div className="lists-button">
        <button className="all">모두</button>
        <button className="Electronics">전자기기</button>
        <button className="jewelry">쥬얼리</button>
        <button className="mens-clothing">남성의류</button>
        <button className="womens-clothing">여성의류</button>
      </div>
    </div>
  );
}
