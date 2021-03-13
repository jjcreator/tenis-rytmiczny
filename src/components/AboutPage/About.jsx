import React from 'react';
import Shape from '../Shape';
import styles from '../../modules/aboutStyle.module.css';
import AboutColumns from './AboutColumns';
import waveImg from '../../images/wave1.png';

const About = () => {
  const {
    flex, animated, aboutMainPage, waveBottom,
  } = styles;
  return (
    <div className={`${flex} ${animated}`} id={aboutMainPage}>
      <Shape text="About us" />
      <AboutColumns />
      <img id={waveBottom} src={waveImg} alt="wave img" />
    </div>
  );
};

export default About;
