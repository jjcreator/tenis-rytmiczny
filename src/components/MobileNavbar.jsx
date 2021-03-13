import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from '../modules/mobileNavbarStyle.module.css';

const {
  mobileNavigation,
  mobileIcon,
  mobileNavbarBody,
  mobileExitIcon,
  mobileHomeLinks,
  mobileHomeLink,
} = styles;

const MobileNavbar = () => {
  const [isVisible, setIsVisible] = useState({
    hamburger: {
      display: 'block',
    },
    menu: {
      transform: 'translateX(-100%)',
    },
  });

  const toggleMobileMenu = () => {
    if (isVisible.hamburger.display === 'block') {
      setIsVisible({
        hamburger: {
          display: 'none',
        },
        menu: {
          transform: 'translateX(0)',
        },
      });
    } else {
      setIsVisible({
        hamburger: {
          display: 'block',
        },
        menu: {
          transform: 'translateX(-100%)',
        },
      });
    }
  };

  return (
    <div className={mobileNavigation}>
      <i role="button" id={mobileIcon} className="fas fa-bars" style={isVisible.hamburger} onClick={toggleMobileMenu} tabIndex="0" label="mobile menu" />
      <div className={mobileNavbarBody} style={isVisible.menu}>
        <i role="button" tabIndex={-1} id={mobileExitIcon} onClick={toggleMobileMenu} className="fas fa-times" label="exit" />
        <div className={`flexColumn ${mobileHomeLinks}`}>
          <NavLink id={mobileHomeLink} exact to="/" onClick={toggleMobileMenu}>Home</NavLink>
          <HashLink to="/#mission" onClick={toggleMobileMenu}>mission</HashLink>
          <HashLink to="/#services" onClick={toggleMobileMenu}>services</HashLink>
          <HashLink to="/#testimonials" onClick={toggleMobileMenu}>testimonials</HashLink>
        </div>
        <NavLink to="/about" onClick={toggleMobileMenu}>About</NavLink>
        <NavLink to="/contact" onClick={toggleMobileMenu}>Contact</NavLink>
      </div>
    </div>
  );
};

export default MobileNavbar;
