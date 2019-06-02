import React, { Component } from 'react';

import styles from "./CartPage.module.scss"

class CartPage extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.headerBig}>Cart</h1>
      </div>
      </div>
    );
  }
}

export default CartPage;
