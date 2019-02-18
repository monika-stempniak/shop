import React, { Component } from 'react';

import styles from "./Product.module.scss";

class Product extends Component {
  render() {
    const { image, price, name } = this.props;

    return (
      <div className={styles.product}>
        <img className={styles.image} src={image} alt={name} />
        <p className={styles.price}>{price}</p>
        <h3 className={styles.title}>{name}</h3>
      </div>
    );
  }
}

export default Product;
