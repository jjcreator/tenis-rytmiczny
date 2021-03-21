import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../modules/mobileNavbarStyle.module.css';

const {
  bar1,
  bar2,
  bar3,
  hamburger,
  hamburgerBar,
  hamburgerWrapper,
  mobileNavigation,
  mobileNavbarBody,
  mobileExitIcon,
  mobileHomeLink,
} = styles;

const MobileNavbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMobileMenu = () => setIsExpanded(!isExpanded);

  return (
    <div className={mobileNavigation}>
      <div className={hamburgerWrapper}>
        <div className={hamburger} role="button" onClick={toggleMobileMenu} tabIndex="0" label="mobile menu">
          <span className={hamburgerBar} id={bar1} style={isExpanded ? { transform: 'translate(0px, 8px) rotate(45deg)' } : undefined} />
          <span className={hamburgerBar} id={bar2} style={isExpanded ? { transform: 'scale(0.2)' } : undefined} />
          <span className={hamburgerBar} id={bar3} style={isExpanded ? { transform: 'translate(0px, -8px) rotate(-45deg)' } : undefined} />
        </div>
      </div>

      <div className={mobileNavbarBody} style={isExpanded ? { transform: 'translateX(0)' } : { transform: 'translateX(-100%)' }}>
        <i role="button" tabIndex={-1} id={mobileExitIcon} onClick={toggleMobileMenu} className="fas fa-times" label="exit" />
        <NavLink id={mobileHomeLink} exact to="/" onClick={toggleMobileMenu}>Stronga główna</NavLink>
        <NavLink to="/about" onClick={toggleMobileMenu}>O książce</NavLink>
        <NavLink to="/contact" onClick={toggleMobileMenu}>Kim jestem?</NavLink>
      </div>
    </div>
  );
};

export default MobileNavbar;
