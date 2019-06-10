import React from 'react';
import PropTypes from 'prop-types';

import Product from "./Product/Product";

import styles from "./Products.module.scss";

const Products = ({ products }) => (
  <div className={styles.products}>
    { 
      products.map((product) => 
        <Product key={product.id} product={product} />
      )
    }
  </div>
);

Products.propTypes = {
  products: PropTypes.array.isRequired
};

export default Products;
