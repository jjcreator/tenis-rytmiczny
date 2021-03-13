import React from 'react';
import styles from '../../modules/aboutStyle.module.css';
import team from '../../images/team2.jpg';

const AboutColumns = () => {
  const {
    flex, animated, aboutColumns, aboutText, teamImg,
  } = styles;
  return (
    <div className={`${flex} ${animated}`} id={aboutColumns}>
      <img src={team} alt="a team of people" id={teamImg} />
      <div id={aboutText}>
        <span>Heading</span>
        , this is the content.
      </div>
    </div>
  );
};

export default AboutColumns;
