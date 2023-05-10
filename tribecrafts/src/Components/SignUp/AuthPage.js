import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
const AuthPage = () => {
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Login / Signup</div>
        <div className="input-container">
          <Link to="/login" className="removeUnder">
            <button className="button-styled">Login</button>
          </Link>
          <Link to="/signup" className="removeUnder">
            <button className="button-styled">Signup</button>
          </Link>
          <Link to="/sellerlogin" className="removeUnder">
            <button className="button-styled">Seller Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
