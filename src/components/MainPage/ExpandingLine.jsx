import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import PropTypes from 'prop-types';

const ExpandingLine = ({
  color, animationDuration, animationDelay, offset,
}) => {
  const lineStyle = {
    borderTop: `5px solid ${color}`,
  };
  return (
    <ScrollAnimation animateIn="expand" animateOnce duration={animationDuration} delay={animationDelay} offset={offset}>
      <hr style={lineStyle} className="roundedLine" />
    </ScrollAnimation>
  );
};

ExpandingLine.propTypes = {
  color: PropTypes.string.isRequired,
  animationDuration: PropTypes.number.isRequired,
  animationDelay: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
};

export default ExpandingLine;
