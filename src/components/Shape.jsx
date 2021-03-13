import React from 'react';
import PropTypes from 'prop-types';

function Shape({ color, textColor, text }) {
  const shapeStyle = {
    backgroundColor: color || 'var(--primary-color)',
    transform: 'skew(-20deg)',
    padding: '1.2rem 4.5rem',
  };

  const textStyle = {
    textAlign: 'center',
    fontSize: '3rem',
    color: textColor || 'var(--showcase-color)',
    transform: 'skew(20deg)',
    margin: 0,
    padding: 0,
    fontWeight: '500',
  };

  return (
    <div style={shapeStyle}>
      <h2 style={textStyle}>{text}</h2>
    </div>
  );
}

Shape.propTypes = {
  color: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Shape;
