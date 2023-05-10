import React from "react";
import "./cart.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthCart = () => {
  const [showsignin, setsignin] = useState(false);

  const handleClick = () => {
    setsignin(true);
  };
  return (
    <div>
      <div className="notin">
        {showsignin ? (
          <Navigate to="/Auth" />
        ) : (
          <div>
            <h3>Sign in to add products !</h3>
            <br />
            <button onClick={handleClick}>Sign In</button>{" "}
          </div>
        )}
      </div>
    </div>
  );
};
