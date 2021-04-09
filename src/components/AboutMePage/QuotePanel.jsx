import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../modules/quotePanel.module.css';

const { quotePanel, quoteAuthor } = styles;

const QuotePanel = ({ quote, author }) => (
  <figure className={quotePanel}>
    <blockquote>
      &quot;
      {quote}
      &quot;
    </blockquote>
    <figcaption className={quoteAuthor}>{author}</figcaption>
  </figure>
);

export default QuotePanel;

QuotePanel.propTypes = {
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};
