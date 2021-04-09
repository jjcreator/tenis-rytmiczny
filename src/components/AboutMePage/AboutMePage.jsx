import React from 'react';
import styles from '../../modules/aboutMePage.module.css';
import ContentPanel from '../Common/ContentPanel';
import doctor from '../../images/doctor.jpg';
import tennis from '../../images/tennis.jpg';
import running from '../../images/running.jpg';
import oranges from '../../images/oranges.jpg';
import cycling from '../../images/cycling-mountains.jpg';
import ImagePanel from './ImagePanel';
import QuotePanel from './QuotePanel';

const aboutMeText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';

const aboutMeText2 = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum';

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
    <ContentPanel title="O mnie" heading="Dr Franciszek Jan Walczak" text={aboutMeText} text2={aboutMeText2} img={doctor} alt="moje zdjęcie" imageIsVertical />
    <ImagePanel images={images} />
    <QuotePanel quote={quote} author={author} />
  </div>
);

export default AboutMe;
