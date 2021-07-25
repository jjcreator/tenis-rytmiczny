import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../modules/showcaseStyle.module.css';
import coverFront from '../../images/tenis-rytmiczny-front-optimised.jpg';
import coverBack from '../../images/tenis-rytmiczny-back.jpg';

const {
  book,
  bookContainer,
  bookCover,
  bookCoverFront,
  bookCoverBack,
  showcase,
  showcaseTitle,
  showcaseSubtitle,
  showcaseDescription,
  showcaseHeader,
  showcaseParagraph,
  largeParagraph,
  smallParagraph,
  title,
} = styles;

const Showcase = () => (
  <section id={showcase} className="flexColumn">
    <div className="pop" id={showcaseHeader}>
      <h1 className={title} id={showcaseTitle}>Tenis rytmiczny - Zdrowy styl życia</h1>
    </div>
    <div className={bookContainer}>
      <div className={`flexColumn ${book}`}>
        <div className={bookCover}>
          <Link to="/ksiazka">
            <div className={bookCoverFront}>
              <img src={coverFront} alt="okładka książki front" />
            </div>
            <div className={bookCoverBack}>
              <img src={coverBack} alt="okładka książki tył" />
            </div>
          </Link>
        </div>
      </div>
    </div>
    <div id={showcaseDescription}>
      <div className={[showcaseParagraph, largeParagraph].join(' ')}>Nowa książka o zdrowym stylu życia</div>
      <div className={[showcaseParagraph, smallParagraph].join(' ')}>Już dostępna w księgarniach!</div>
    </div>
  </section>
);

export default Showcase;
