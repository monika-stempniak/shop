import React, { Component, Fragment } from 'react';
import { compose } from "recompose";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import styles from "./CartPage.module.scss"

class CartPage extends Component {
  renderCart() {
    const { products } = this.props.cart;

    return products.map(({ id, image, name, manufacture, amount}) => (
      <li key={id} className={styles.cartItem}>
        <img className={styles.image} src={image} alt={`${manufacture} ${name}`} />
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.manufacture}>{manufacture}</p>
        <p className={styles.amount}>${amount}</p>
      </li>
    ));
  }

  render() {
    const { products, productsAmount } = this.props.cart;

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.headerBig}>Cart</h1>
          <div className={styles.listWrapper}>
          {
            products.length === 0
            ? <p>No items</p>
            : <Fragment>
              <ul>
                {
                  (products.length > 0) && this.renderCart()
                }
              </ul>
              <hr/>
              {
                products.length > 0 && 
                <p className={styles.sum}>SUM: ${productsAmount}</p>
              }
              </Fragment> 
          }
          </div>
      </div>
      </div>
    );
  }
}

CartPage.propTypes = {
  cart: PropTypes.shape({
    products: PropTypes.array, 
    productsAmount: PropTypes.number,
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
)(CartPage);
