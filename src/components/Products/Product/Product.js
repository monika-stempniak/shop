import React from 'react';
import PropTypes from 'prop-types';
import { compose } from "recompose";
import { connect } from "react-redux";

import { actions as cartActions } from "../../../store/actions/cartActions";

import styles from "./Product.module.scss";

const Product = (props) => {
  const { image, amount, name, manufacture} = props.product;

  return (
    <div className={styles.product}>
      <img className={styles.image} src={image} alt={`${manufacture} ${name}`} />
      <p className={styles.price}>{`$${amount}`}</p>
      <h3 className={styles.title}>{name}</h3>
      <button type="button" onClick={() => props.addToCart(props.product)} className={styles.button}>Add to cart</button>
    </div>
  );
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
