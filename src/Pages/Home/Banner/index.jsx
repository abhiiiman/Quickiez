import React, { useEffect } from 'react';
import "./style.css";
import Logo from '../../../Components/Common/Logo';
import bannerImage from "./banner.png";
import { gsap } from 'gsap';
import SplitType from 'split-type';

const Banner = ({ handleScrollMenu }) => {
    useEffect(() => {
        const ourText = new SplitType('h1.our-text', { types: 'chars' });
        const chars = ourText.chars;

        // Set initial styles for h1 and characters
        gsap.set('.our-text', { opacity: 1 });
        gsap.set(chars, { y: 100, opacity: 0 });

        gsap.fromTo(
            chars,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 2,
                ease: 'power4.out',
            }
        );
    }, []);

    return (
        <header>
            <div className="header-content" >
                <Logo />
                <div className="content-main" >
                    <h1 className='our-text text-effect'>Get Delicious Food for your<br />Mid-Time Cravings.</h1>
                    <p>Order your tasty and healthy food now</p>
                    <button onClick={handleScrollMenu} >
                        View Menu <i className="fas fa-long-arrow-alt-right"></i>
                    </button>
                </div>
            </div>
            <img src={bannerImage} alt="banner.png" className="header-img" />
        </header>
    )
}

export default Banner;