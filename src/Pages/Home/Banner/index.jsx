import React from 'react';
import "./style.css";
import Logo from '../../../Components/Common/Logo';
import bannerImage from "./banner.png";

import { useRef, useEffect } from 'react';

import gsap from "gsap";
import SplitType from 'split-type';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Banner = ({ handleScrollMenu }) => {
    const titleTextRef = useRef(null);
    const bannerImgRef = useRef(null);
    const menuBtnRef = useRef(null);

    useEffect(() => {
        // Animation for the title text
        const element1 = titleTextRef.current;
        gsap.fromTo(
            element1,
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 3,
                ease: 'power4.out',
            }
        );

        // SplitType animation for the characters in the paragraph
        const ourText = new SplitType('p.our-text', { types: 'chars' });
        const chars = ourText.chars;
        gsap.fromTo(
            chars,
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 3,
                ease: 'power4.out',
            }
        );

        // Animation for the banner image
        const element2 = bannerImgRef.current;
        gsap.fromTo(
            element2,
            {
                x: 200,
                opacity: 0,
            },
            {
                x: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 3,
                ease: 'power4.out',
            }
        );

        // Animation for the button
        const element3 = menuBtnRef.current;
        gsap.fromTo(
            element3,
            {
                y: 150,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 4,
                ease: 'power4.out',
                //ScrollTrigger: { trigger: element3 }
            }
        );

    }, []);

    return (
        <header>
            <div className="header-content">
                <Logo />
                <div className="content-main">
                    <h1 className="text-effect" ref={titleTextRef}>
                        Get Delicious Food for your
                        <br />
                        Mid-Time Cravings.
                    </h1>
                    <p className="our-text">Order your tasty and healthy food now</p>
                    <button onClick={handleScrollMenu} ref={menuBtnRef}>
                        View Menu <i className="fas fa-long-arrow-alt-right"></i>
                    </button>
                </div>
            </div>
            <img
                src={bannerImage}
                alt="banner.png"
                className="header-img"
                ref={bannerImgRef}
            />
        </header>
    );
};

export default Banner;
