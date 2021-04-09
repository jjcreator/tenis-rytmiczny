import React from 'react';
import ContentPanel from '../Common/ContentPanel';
import runningWoman from '../../images/womanRunning1.jpg';
import healthyFood from '../../images/healthyFood1.jpg';
import tennisPlayer from '../../images/tennisPlayer1.jpg';
import womanReading from '../../images/womanReading1.jpg';
import styles from '../../modules/bookPage.module.css';

const titlesArray = [
  'Ruch to zdrowie',
  'Co znajdziesz w tej książce?',
  'Czym jest tenis rytmiczny?',
  'Dowiesz się jak zmienić styl życia',
];

const sampleContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum';

const imagesArray = [
  runningWoman, healthyFood, tennisPlayer, womanReading,
];

const { bookPage } = styles;

const BookPage = () => (
  <div className={`${bookPage} flexColumn`}>
    {titlesArray.map((title, index) => <ContentPanel isImgVertical={false} img={imagesArray[index]} title={title} text={sampleContent} reverseOrder={index % 2 !== 0} />)}
  </div>

);

export default BookPage;
