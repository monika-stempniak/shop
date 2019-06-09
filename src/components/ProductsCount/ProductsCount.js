import React, { Component } from 'react';
import { compose } from "recompose";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import styles from "./ProductsCount.module.scss"

class ProductsCount extends Component {
  render() {
    const { productsCount } = this.props.cart;

    return (
      <div className={styles.container}>
        {productsCount}
      </div>
    );
  }
}

ProductsCount.propTypes = {
  cart: PropTypes.shape({
    productsCount: PropTypes.number,
  }),
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default compose(
  connect(
    mapStateToProps,
    {}
  )
)(ProductsCount);
