import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import Logo from "../assets/Ara_Logo.png";
import "./header.css";

// deploy instruction https://stackoverflow.com/questions/60269680/react-website-not-showing-after-deployment-with-firebase
const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    return (
      <div className="header">
        <div className="logo-nav">
          <div className="logo-container">
            <a href="/home">
            <img src={Logo} alt="Ara Logo" className="logo" width='100%'/>
            </a>
          </div>
  
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <a href="/home">Home</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="/facilities">Facilities</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="/house-rules">House Rules</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="/fees-payments">Fees/Payment</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="/about-us">About Us</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a href="/contact-us">Contact Us</a>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <a target="_blank" rel="noreferrer" href="https://app.lapentor.com/sphere/otautahi-house-gl">Virtual Tour</a>
            </li>
            <li onClick={closeMobileMenu}>
            <a href="/apply-now" className="signup-btn">
            Apply Now
            </a>
          </li>
            <li className="option mobile-option" onClick={closeMobileMenu}>
              <a href="/apply-now" >
                Apply Now
              </a>
            </li>
            {/* <li className="option mobile-option" onClick={closeMobileMenu}>
              <a href="#">Fees/Payments</a>
            </li>
            <li className="option mobile-option" onClick={closeMobileMenu}>
              <a href="" className="sign-up">
                Virtual Tour
              </a>
            </li> */}
          </ul>
        </div>
        {/* <ul className="signin-up">
          <li onClick={closeMobileMenu}>
            <a href="/apply-now" className="signup-btn">
            Apply Now
            </a>
          </li>
        </ul>  */}
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    );
  };
  

export default Header;