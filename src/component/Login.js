import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div className="login-container">
      <form className="login-box">
        <p>로그인</p>
        <input className="email" placeholder="E-mail"></input>
        <input className="password" placeholder="Password"></input>
        <button className="login-button">로그인</button>
        <p className="join">계정이 없습니까? 가입하기</p>
      </form>
    </div>
  );
}
