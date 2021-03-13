import React from 'react';
import styles from '../../modules/contactStyle.module.css';
import Shape from '../Shape';
import Form from './Form';
import TraditionalContact from './TraditionalContact';

function Contact() {
  return (
    <div id={styles.contact} className={styles.animated}>
      <Shape text="Contact us" />
      <div id={styles.mainContactBox}>
        <Form />
        <TraditionalContact />
      </div>
    </div>
  );
}

export default Contact;
