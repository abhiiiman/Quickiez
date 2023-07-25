import React from 'react';
import "./style.css";
import Logo from '../../../Components/Common/Logo';
import bannerImage from "./banner.png";

const Banner = () => {
    return (
        <header>
            <div className="header-content">
                <Logo />
                <div className="content-main">
                    <h1>Get Delicious Food for your<br />Mid-Time Cravings.</h1>
                    <p>Order your tasty and healthy food now</p>
                    <button>
                        View Menu <i className="fas fa-long-arrow-alt-right"></i>
                    </button>
                </div>
            </div>
            <img src={bannerImage} alt="banner.png" className="header-img" />
        </header>
    )
}

export default Banner;