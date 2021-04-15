import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../modules/contentPanel.module.css';

const {
  contentPanel, contentPanelHeading, contentPanelTitle, contentPanelBody, contentPanelText, contentPanelTextTitle, contentPanelImage, contentPanelImageWrapper, secondaryText, contentPanelImageVerticalWrapper, line,
} = styles;

const ContentPanel = ({
  alt, heading, img, imageIsVertical, title, text, text2, reverseOrder, children,
}) => (
  <div className={`flexColumn ${contentPanel}`}>
    <div className={contentPanelHeading}>
      <h2 className={contentPanelTitle}>{title}</h2>
    </div>
    <div className={contentPanelBody} style={{ flexDirection: reverseOrder ? 'row-reverse' : 'row' }}>
      <div className={contentPanelText} style={!reverseOrder ? { paddingRight: '20px' } : { paddingLeft: '20px' }}>
        {heading && <h2 className={contentPanelTextTitle}>{heading}</h2>}
        <p>{text}</p>
        {text2 && (<p className={secondaryText}>{text2}</p>)}
        {children}
      </div>
      <div className={!imageIsVertical ? contentPanelImageWrapper : contentPanelImageVerticalWrapper}>
        <img className={contentPanelImage} src={img} alt={alt} />
      </div>
    </div>
    {!heading && <div className={line} />}
  </div>
);

ContentPanel.defaultProps = {
  children: undefined,
  reverseOrder: false,
  alt: '',
  heading: '',
  text2: '',
  imageIsVertical: false,
};

ContentPanel.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.node,
  heading: PropTypes.string,
  imageIsVertical: PropTypes.bool,
  img: PropTypes.string.isRequired,
  reverseOrder: PropTypes.bool,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  text2: PropTypes.string,
};

export default ContentPanel;
