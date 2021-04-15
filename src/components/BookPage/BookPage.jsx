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

const { bookPage } = styles;

const BookPage = () => (
  <div className={`${bookPage} flexColumn animated`}>
    {titlesArray.map((title, index) => <ContentPanel img={imagesArray[index]} title={title} text={contentArray[index]} reverseOrder={index % 2 !== 0} />)}
  </div>

);

export default BookPage;
