import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import PropTypes from 'prop-types';
import styles from '../../modules/testimonialsStyle.module.css';

const {
  authorName,
  authorCity,
  testimonialCard,
  testimonialTop,
  testimonialImg,
  testimonialTopText,
  testimonialTextBox,
  quote,
  quoteLeft,
  quoteRight,
} = styles;

const TestimonialCard = ({
  name, city, imgSrc, animationDelay, text,
}) => (
  <ScrollAnimation className="isAnimated" animateIn="zoomIn" animateOnce duration={1} delay={animationDelay} offset={200}>
    <div className={`${testimonialCard} flexColumn`}>
      <div className={testimonialTop}>
        <img className={testimonialImg} src={imgSrc} alt="user" />
        <p className={`${testimonialTopText} flexColumn`}>
          <span className={authorName}>{name}</span>
          <span className={authorCity}>{city}</span>
        </p>
      </div>
      <div className={`${testimonialTextBox} flexColumn`}>
        <i className={`fas fa-quote-left ${quote} ${quoteLeft}`} />
        <p>{text}</p>
        <i className={`fas fa-quote-right ${quote} ${quoteRight}`} />
      </div>
    </div>
  </ScrollAnimation>
);

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  animationDelay: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default TestimonialCard;
