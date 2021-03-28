import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../modules/showcaseStyle.module.css';

const {
  book,
  bookContainer,
  bookCover,
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
      <h1 className={title} id={showcaseTitle}>Tenis rytmiczny</h1>
      <h2 className={title} id={showcaseSubtitle}>Zdrowy styl życia</h2>
    </div>
    <div className={bookContainer}>
      <div className={`flexColumn ${book}`}>
        <div className={bookCover} />
        <Link to="/ksiazka">
          <div className="buyNowButton">Dowiedz się więcej</div>
        </Link>
      </div>
    </div>
    <div id={showcaseDescription}>
      <div className={[showcaseParagraph, largeParagraph].join(' ')}>Nowa książka o zdrowym stylu życia</div>
      <div className={[showcaseParagraph, smallParagraph].join(' ')}>Już wkrótce dostępna</div>
    </div>
  </section>
);

export default Showcase;
