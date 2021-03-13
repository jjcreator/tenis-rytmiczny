import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from '../../modules/callToActionStyle.module.css';
import womanImg from '../../images/woman1.jpg';

function CallToAction() {
  return (
    <ScrollAnimation className={styles.isAnimated} animateIn="slideInLeft" duration={3} animateOnce offset={100} delay={100}>
      <section id={styles.callToAction}>
        <img id={styles.ctaImg} src={womanImg} alt="woman calling" />
        <p>
          Still not sure if we can help? Get in touch and get a
          <span>free consultation online!</span>
        </p>
        <Link to="/contact">
          <button className="actionButton" type="button">Contact us</button>
        </Link>
      </section>
    </ScrollAnimation>
  );
}

export default CallToAction;
