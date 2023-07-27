import React from 'react';
import "./style.css";
// import logoImage from "./logo.png";

const Logo = () => {
  return (
    <div className="text-effect logo">
      <div>
        {/* <img src={logoImage} alt="logo.png" /> */}
        <img src="https://cdn.discordapp.com/attachments/976997351472381973/1070353047949148252/logo_1.png" alt="logo.png" />
        <span className='brand-name'><b>Quickiez</b></span>
      </div>
      <p>
        <b>Canteen & Refreshment</b>
      </p>
    </div>
  )
}

export default Logo;