import React from 'react';
import styles from '../../modules/contactStyle.module.css';

function TraditionalContact() {
  return (
    <div className={styles.flexWrapper}>
      <h2 id={styles.contactCardHeader} className={styles.contactHeader}>Call us</h2>
      <div id={styles.contactCard}>
        <ul id={styles.contactCardList}>
          <li>
            <i className="fas fa-map-pin" />
            <b>Our Office:</b>
            {' '}
            123 Fake Street, Neverland
          </li>
          <li>
            <i className="fas fa-phone" />
            <b>Phone:</b>
            {' '}
            0-700-123-Fake
          </li>
          <li>
            <i className="fas fa-fax" />
            <b>Fax:</b>
            {' '}
            0-700-123-FakeFax
          </li>
          <li>
            <i className="fas fa-clock" />
            <b>Monday - Saturday: </b>
            09:00 - 17:30
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TraditionalContact;
