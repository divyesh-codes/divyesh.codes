import React, { useEffect, useState } from 'react';
import socialMedia from './data/social-links.json';

const Footer = () => {
    const [social, setSocial] = useState([]);

    useEffect(() => {
        setSocial(socialMedia.socialLinks);
    },[]);
  
    return (
        <footer className="main-footer">
        <div className="main-container">
            <div className="main-footer__upper">
                <div className="main-footer__row main-footer__row-1">
                    <h2 className="heading heading-sm main-footer__heading-sm">
                        <span>Social</span>
                    </h2>
                    <div className="main-footer__social-cont">
                    {social.map((social, index) => (
                        <a target="_blank" rel="noreferrer" href={social.link} key={index}>
                            <img className="main-footer__icon" src={social.lightImg} alt={social.name}/>
                        </a>
                    ))}
                    </div>
                </div>
                <div className="main-footer__row main-footer__row-2">
                    <h2 className="heading heading-sm text-lt">Divyesh</h2>
                    <p className="main-footer__short-desc">
                        A Full Stack Web & App Developer with expertise in UI/UX Design and Graphic Design.
                    </p>
                </div>
            </div>
            {/* <!-- If you give me some credit or shoutout here by linking to my website, then it will be a big thing for me and will help me a lot :) --> */}
            <div className="main-footer__lower">
                &copy; Copyright {new Date().getFullYear()}. Made by
                <a rel="noreferrer" target="_blank" href="https://divyeshcodes.vercel.app">
                    Divyesh Codes
                </a>
            </div>

        </div>
        </footer>
    );
};

export default Footer;
