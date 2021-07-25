/* eslint-disable max-len */
import React from 'react';
import ContentPanel from '../Common/ContentPanel';
import runningWoman from '../../images/womanRunning1.jpg';
import healthyFood from '../../images/healthyFood1.jpg';
import tennisPlayer from '../../images/tennisPlayer1.jpg';
import womanReading from '../../images/womanReading1.jpg';
import styles from '../../modules/bookPage.module.css';
import { contentArray, titlesArray } from '../../content/aboutBookContent';

const imagesArray = [
  runningWoman, healthyFood, tennisPlayer, womanReading,
];

const {
  bookPage, buyList, buyListItem, buyListHeader, buyListWrapper, buyListFooter,
} = styles;

const BookPage = () => (
  <div className={`${bookPage} flexColumn animated`}>
    {titlesArray.map((title, index) => <ContentPanel img={imagesArray[index]} title={title} text={contentArray[index]} reverseOrder={index % 2 !== 0} />)}
    <div className={buyListWrapper}>
      <h2 className={buyListHeader}>Książkę można nabyć m.in. w :</h2>
      <ul className={buyList}>
        <a href="https://www.taniaksiazka.pl/tenis-rytmiczny-zdrowy-styl-zycia-franciszek-jan-walczak-p-1553325.html" className={buyListItem} target="_blank" rel="noreferrer">
          <li>taniaksiazka.pl</li>
        </a>
        <a href="https://www.empik.com/tenis-rytmiczny-zdrowy-styl-zycia-walczak-franciszek-jan,p1276535665,ksiazka-p" className={buyListItem} target="_blank" rel="noreferrer">
          <li>empik.pl</li>
        </a>
        <a href="https://www.gildia.pl/literatura/491792-tenis-rytmiczny-zdrowy-styl-zycia" className={buyListItem} target="_blank" rel="noreferrer">
          <li>
            gildia.pl
          </li>
        </a>
        <a href="https://www.znak.com.pl/ksiazka/tenis-rytmiczny-zdrowy-styl-zycia-walczak-franciszek-jan-207790" className={buyListItem} target="_blank" rel="noreferrer">
          <li>
            znak.com.pl
          </li>
        </a>
        <a href="https://tantis.pl/tenis-rytmiczny-zdrowy-styl-p3090241" className={buyListItem} target="_blank" rel="noreferrer">
          <li>tantis.pl</li>
        </a>
        <a href="https://bookmaster.com.pl/ksiazka-2411116-tenis-rytmiczny-zdrowy-styl-zycia-franciszek-jan-walczak" className={buyListItem} target="_blank" rel="noreferrer">
          <li>bookmaster.com.pl</li>
        </a>
        <a href="https://www.poczytaj.pl/ksiazka/tenis-rytmiczny-zdrowy-styl-zycia-walczak-franciszek,502231" className={buyListItem} target="_blank" rel="noreferrer">
          <li>poczytaj.pl</li>
        </a>
        <a href="https://zdrowepodejscie.pl/dr-franciszek-jan-walczak,f172874" className={buyListItem} target="_blank" rel="noreferrer">
          <li>zdrowepodejscie.pl</li>
        </a>
      </ul>
      <p className={buyListFooter}>...i innych księgarniach w całej Polsce. Zamów swój egzemplarz już dziś!</p>
    </div>
  </div>

);

export default BookPage;
