import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../modules/mobileNavbarStyle.module.css';
import logo from '../images/logo.svg';

const {
  bar1,
  bar2,
  bar3,
  hamburger,
  hamburgerBar,
  hamburgerWrapper,
  hamburgerText,
  hamburgerTextWrapper,
  mobileNavigation,
  mobileNavbarBody,
  mobileLogo,
  mobileHomeLink,
  mobileLinksWrapper,
} = styles;

const MobileNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMobileMenu = () => setIsExpanded(!isExpanded);

  return (
    <div className={mobileNavigation}>
      <div className={hamburgerWrapper} onClick={toggleMobileMenu} role="button" tabIndex="0" label="mobile menu">
        <div className={hamburger}>
          <span className={hamburgerBar} id={bar1} style={isExpanded ? { transform: 'translate(0px, 8px) rotate(45deg)' } : undefined} />
          <span className={hamburgerBar} id={bar2} style={isExpanded ? { transform: 'scale(0.2)' } : undefined} />
          <span className={hamburgerBar} id={bar3} style={isExpanded ? { transform: 'translate(0px, -8px) rotate(-45deg)' } : undefined} />
        </div>
        <div className={hamburgerTextWrapper}>
          <h2 className={hamburgerText}>Tenisrytmiczny.pl</h2>
        </div>
      </div>

      <div className={mobileNavbarBody} style={isExpanded ? { transform: 'translateX(0)' } : { transform: 'translateX(-100%)' }}>
        <img className={mobileLogo} src={logo} alt="logo tenisa rytmicznego" />
        <div className={`flexColumn ${mobileLinksWrapper}`}>
          <NavLink id={mobileHomeLink} exact to="/" onClick={toggleMobileMenu}>Strona główna</NavLink>
          <NavLink to="/ksiazka" onClick={toggleMobileMenu}>O książce</NavLink>
          <NavLink to="/recenzje" onClick={toggleMobileMenu}>Recenzje</NavLink>
          <NavLink to="/autor" onClick={toggleMobileMenu}>Kim jestem?</NavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
