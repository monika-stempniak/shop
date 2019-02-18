import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Product from "./Product/Product";

import styles from "./Products.module.scss";

class Products extends Component {
  render() {
    const { products } = this.props;

    return (
      <div className={styles.products}>
        { 
          products.map(product => 
            <Product
              key={product.id}
              image={product.image}
              price={product.amount}
              name={product.name}
              manufacture={product.manufacture}
            />
          )
        }
      </div>
    );
  }
}

Products.propTypes = {
  products: PropTypes.array
};

export default Products;
