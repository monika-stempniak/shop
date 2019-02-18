import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from "./Product.module.scss";

class Product extends Component {
  render() {
    const { image, price, name, manufacture } = this.props;

    return (
      <div className={styles.product}>
        <img className={styles.image} src={image} alt={`${manufacture} ${name}`} />
        <p className={styles.price}>{price}</p>
        <h3 className={styles.title}>{name}</h3>
      </div>
    );
  }
}

Product.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  manufacture: PropTypes.string.isRequired
};

export default Product;
