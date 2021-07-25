/* eslint-disable max-len */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../modules/navbarStyle.module.css';
import logo from '../images/logo2.svg';

const {
  buyNowButtonWrapper, flexColumn, navbar, logoImg, logoContainer, links, link, underline,
} = styles;

function Navbar() {
  return (
    <nav
      className={`${navbar} ${flexColumn}`}
    >
      <NavLink to="/" exact>
        {' '}
        <div className={flexColumn} id={logoContainer}>
          <img className={logoImg} src={logo} alt="logo tenisa rytmicznego" />
        </div>
      </NavLink>

      <div className={flexColumn} id={links}>
        <NavLink className={link} activeClassName={underline} exact to="/">Strona główna</NavLink>
        <NavLink className={link} activeClassName={underline} to="/ksiazka">O książce</NavLink>
        <NavLink className={link} activeClassName={underline} to="/recenzje">Recenzje</NavLink>
        <NavLink className={link} activeClassName={underline} to="/autor">Kim jestem?</NavLink>
      </div>
      <div className={buyNowButtonWrapper}>
        <a type="button" target="_blank" rel="noreferrer" href="https://www.gildia.pl/literatura/491792-tenis-rytmiczny-zdrowy-styl-zycia" className="buyNowButton">Kup teraz</a>
      </div>
    </nav>
  );
}

export default Navbar;
