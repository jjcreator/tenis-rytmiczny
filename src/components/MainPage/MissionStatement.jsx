import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from '../../modules/missionStyle.module.css';
import Shape from '../Shape';
import ExpandingLine from './ExpandingLine';
import manWithPhone from '../../images/man-calling.jpg';

function MissionStatement() {
  return (
    <ScrollAnimation className="isAnimated" animateIn="pop" animateOnce duration={1}>
      <section className={`flexColumn ${styles.mission}`} id="mission">
        <Shape text="Our mission" />
        <div id={styles.missionRow}>
          <p className={styles.missionParagraph}>
            <span className={styles.bigText}>We alwayas strive</span>
            {' '}
            to provide outstanding legal services that deliver the best possible client outcomes
            {' '}
          </p>
          <img id={styles.missionImg} src={manWithPhone} alt="man in black holding phone" />
        </div>
        <ExpandingLine animationDuration={0.4} animationDelay={600} offset={0} />
      </section>
    </ScrollAnimation>
  );
}

export default MissionStatement;
