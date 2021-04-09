import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../modules/imagePanel.module.css';

const { imagePanel, imagePanelImage } = styles;

const ImagePanel = ({ images }) => (
  <div className={imagePanel}>
    {images.map((image) => <img src={image.image} alt={image.alt} className={imagePanelImage} key={image.image} />)}
  </div>
);

ImagePanel.defaultProps = {
  images: [],
};

ImagePanel.propTypes = {
  images: PropTypes.shape([]),
};

export default ImagePanel;
