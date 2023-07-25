import React from 'react';
import "./style.css";
import logoImage from "./logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <div>
        <img src={logoImage} alt="logo.png" />
        <span><b>Sushant</b></span>
      </div>
      <p>
        <b>Canteen & Refreshment</b>
      </p>
    </div>
  )
}

export default Logo;