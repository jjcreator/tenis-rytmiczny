import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../modules/bookPage.module.css';

const {
  bookPanel, bookPanelHeading, bookPanelTitle, bookPanelBody, bookPanelText, bookPanelImage, bookPanelImageWrapper,
} = styles;

const BookPanel = ({
  reverseOrder, img, alt, title, text,
}) => (
  <div className={`flexColumn ${bookPanel}`}>
    <div className={bookPanelHeading}>
      <h2 className={bookPanelTitle}>{title}</h2>
    </div>
    <div className={bookPanelBody} style={{ flexDirection: reverseOrder ? 'row-reverse' : 'row' }}>
      <div className={bookPanelText}>
        <p>{text}</p>
      </div>
      <div className={bookPanelImageWrapper}>
        <img className={bookPanelImage} src={img} alt={alt} />
      </div>
    </div>
  </div>
);

BookPanel.defaultProps = {
  reverseOrder: false,
  alt: '',
};

BookPanel.propTypes = {
  reverseOrder: PropTypes.bool,
  img: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default BookPanel;
