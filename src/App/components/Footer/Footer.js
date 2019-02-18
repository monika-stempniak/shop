import React, { Component } from 'react';

import styles from "./Footer.module.scss"

class Footer extends Component {
  render() {
    return (
    <footer className={styles.footer}>
      <div className={styles.container}>
          <p className={styles.content}>Shop &copy; 2019</p>
          <p className={styles.content}>Designed by Monika</p>
      </div>
    </footer>
    );
  }
}

export default Footer;
