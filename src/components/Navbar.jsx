/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../modules/navbarStyle.module.css';
import logo from '../images/logo.svg';

const {
  buyNowButton, buyNowButtonWrapper, flexColumn, myNavbar, logoImg, logoContainer, links, link, underline,
} = styles;

function Navbar() {
  return (
    <nav
      className={`${myNavbar} ${flexColumn}`}
    >
      <div className={flexColumn} id={logoContainer}>
        <img className={logoImg} src={logo} alt="logo tenisa rytmicznego" />
      </div>
      <div className={flexColumn} id={links}>
        <NavLink className={link} activeClassName={underline} exact to="/">Strona główna</NavLink>
        <NavLink className={link} activeClassName={underline} to="/about">O książce</NavLink>
        <NavLink className={link} activeClassName={underline} to="/contact">Kim jestem?</NavLink>
      </div>
      <div className={buyNowButtonWrapper}>
        <button type="button" className={buyNowButton}>Kup teraz</button>
      </div>
    </nav>
  );
}

export default Navbar;
