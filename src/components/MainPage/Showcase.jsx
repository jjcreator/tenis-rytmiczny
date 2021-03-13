/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import styles from '../../modules/showcaseStyle.module.css';
import team from '../../images/team.jpg';
import aboutImg from '../../images/team2.jpg';
import contactImg from '../../images/contact.jpg';

const {
  showcase,
  showcaseTitle,
  showcaseBody,
  teamImg,
  showcaseDescription,
  showcaseHeader,
  showcaseParagraph,
  doubleArrow,
} = styles;

function Showcase() {
  const scrollDown = () => {
    window.scrollTo(0, window.innerHeight);
  };

  return (
    <section id={showcase} className="flexColumn">
      <h1 className="pop" id={showcaseTitle}>Tenis rytmiczny</h1>
      <div className="pop" id={showcaseBody}>
        <img id={teamImg} src={team} alt="the team" />
        <img src={aboutImg} alt="about" style={{ width: '0' }} />
        <img src={contactImg} alt="the team" style={{ width: '0' }} />
        <div className="flexColumn" id={showcaseDescription}>
          <h2 id={showcaseHeader}>Best fake specialists</h2>
          <p id={showcaseParagraph}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
          </p>
          <Link to="/contact">
            <button className="actionButton" type="button">Get help now</button>
          </Link>
        </div>
      </div>
      <div id={doubleArrow} onClick={scrollDown} type="button">
        <FontAwesomeIcon icon={faAngleDoubleDown} />
      </div>
    </section>
  );
}

export default Showcase;
