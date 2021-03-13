import React, { useState, useEffect } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from '../../modules/servicesStyle.module.css';
import Shape from '../Shape';
import ExpandingLine from './ExpandingLine';

const chosenAnimation = 'fadeInUp';
const duration = 1;
const services = ['Fake Company Law', 'Fake Commercial Law', 'Fake Property Law', 'Fake Construction Law', 'Fake Civil Law', 'Fake Divorce Law', 'Fake Legal Representation', 'Fake Employment Law', 'Fake Legal Consulting'];

function Services() {
  const [isMobile, setIsMobile] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [screenDimensions, setScreenDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener('resize', setScreenDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    }));

    return () => {
      window.removeEventListener('resize', setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      }));
    };
  }, []);

  useEffect(() => {
    const createItems = () => {
      const items = [];
      if (screenDimensions.width <= 850 || screenDimensions.height <= 500) {
        setIsMobile(true);
      } else setIsMobile(false);
      for (let i = 1; i < services.length + 1; i++) {
        items.push(
          <ScrollAnimation className={`${styles.listItem} ${styles.isAnimated}`} animateIn={chosenAnimation} animateOnce={false} duration={duration} delay={i * 90} offset={50} key={i}>
            <i className={`fas fa-landmark ${styles.icon}`} />
            <p>{services[i - 1]}</p>
          </ScrollAnimation>,
        );
        setListItems(items);
      }
    };
    createItems();
  }, [isMobile, screenDimensions.width, screenDimensions.height]);

  return (
    <section className={styles.services} id="services">
      <Shape textColor="var(--text-color)" color="var(--attention-color)" text="Services" />
      <div className={styles.servicesHeader}>
        We pride ourselves on always providing the highest standards of service, something which is supported by our ever-growing list of returning clients.
      </div>
      <div className={styles.servicesList}>
        {listItems}
      </div>
      <ScrollAnimation className="isAnimated" animateIn={chosenAnimation} animateOnce duration={duration} delay={1000} offset={50}>
        <div className={styles.bottomText}>...and more</div>
      </ScrollAnimation>
      <ExpandingLine color="var(--text-color)" animationDuration={0.5} animationDelay={1750} offset={50} />
    </section>
  );
}

export default Services;
