import React from 'react';
import PropTypes from 'prop-types';
import style from '../../modules/reviewCard.module.css';
import upquoteImg from '../../images/upquote.svg';
import downquoteImg from '../../images/downquote.svg';

const {
  downquote, reviewAuthor, reviewCard, reviewText, reviewQuote, upquote,
} = style;

const ReviewCard = ({ review, author }) => (
  <div className={reviewCard}>
    <img className={`${reviewQuote} ${upquote}`} src={upquoteImg} alt="cudzysłów" />
    <p className={reviewText}>
      {review}
    </p>
    <img className={`${reviewQuote} ${downquote}`} src={downquoteImg} alt="cudzysłów" />
    <span className={reviewAuthor}>{author}</span>
  </div>
);

ReviewCard.propTypes = {
  author: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};

export default ReviewCard;
