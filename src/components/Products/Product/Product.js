import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from "recompose";
import { connect } from "react-redux";

import { actions as cartActions } from "../../../store/actions/cartActions";

import styles from "./Product.module.scss";

class Product extends Component {

  render() {
    const { image, amount, name, manufacture} = this.props.product;

    return (
      <div className={styles.product}>
        <img className={styles.image} src={image} alt={`${manufacture} ${name}`} />
        <p className={styles.price}>{`$${amount}`}</p>
        <h3 className={styles.title}>{name}</h3>
        <button type="button" onClick={() => this.props.addToCart(this.props.product)} className={styles.button}>Add to cart</button>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    manufacture: PropTypes.string.isRequired
  }).isRequired,
  addToCart: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default compose(
  connect(
    mapStateToProps,
    { 
      ...cartActions
    }
  )
)(Product);
