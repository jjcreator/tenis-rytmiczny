/* eslint-disable max-len */
import React from 'react';
import styles from '../../modules/aboutMePage.module.css';
import ContentPanel from '../Common/ContentPanel';
import doctor from '../../images/autor.jfif';
import tennis from '../../images/tennis.jpg';
import running from '../../images/running.jpg';
import oranges from '../../images/oranges.jpg';
import cycling from '../../images/cycling-mountains.jpg';
import ImagePanel from './ImagePanel';
import QuotePanel from './QuotePanel';

const aboutMeText = 'Lekarz pediatra, pasjonat i propagator zdrowego stylu życia, autor autobiografii "Ruchome życie", twórca TENISA RYTMICZNEGO. W zawodzie lekarza pracował 54 lata łącząc obowiązki zawodowe z wieloletnim rekreacyjnym uprawianiem kilku dyscyplin sportowych. Były to: okres biegania oraz równoległej, naprzemiennej gry w tenisa ziemnego trwający 23 lata, kolarstwo – 14 lat, chód sportowy – 4 lata, tenis rytmiczny – 5 lat dotychczas i nadal aktywny. Obecna aktywność to tenis rytmiczny oraz popularyzacja zdrowego stylu życia. ';

const quote = 'Dziś jest pierwszy dzień z reszty twojego życia';
const author = 'José Saramago';

const images = [
  { image: tennis, alt: 'tenis ziemny' },
  { image: running, alt: 'bieganie' },
  { image: oranges, alt: 'cytrusy' },
  { image: cycling, alt: 'kolarstwo górskie' },
];

const { aboutMe } = styles;

const AboutMe = () => (
  <div className={`flexColumn animated ${aboutMe}`}>
    <ContentPanel title="O mnie" heading="Dr Franciszek Jan Walczak" text={aboutMeText} img={doctor} alt="moje zdjęcie" imageIsVertical />
    <ImagePanel images={images} />
    <QuotePanel quote={quote} author={author} />
  </div>
);

export default AboutMe;
