import React from 'react';
import Logo from '../Logo';
import "./style.css";

const Footer = () => {
    return (
        <footer>
            <p>
                <div> {/* className='glow' */}
                    Made with  <i id="heart" className="fa-solid fa-heart"></i>  by <strong>Abhijit Mandal</strong>
                </div>

                <div className='follow-container'>
                    <a href="https://github.com/abhiiiman">
                        <i className="glow social-icon fa-brands fa-github fa-spin fa-spin"></i>
                    </a>
                    <a href="https://www.instagram.com/_m_abhijit_/">
                        <i className="glow social-icon fa-brands fa-instagram fa-spin"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/abhiiiman/">
                        <i className="glow social-icon fa-brands fa-linkedin-in fa-spin"></i>
                    </a>
                    <a href="mailto:mandalabhijit2008@gmail.com">
                        <i className="glow social-icon fa-regular fa-envelope fa-spin"></i>
                    </a>
                </div>
            </p>
            <Logo />
        </footer>
    )
}

export default Footer;