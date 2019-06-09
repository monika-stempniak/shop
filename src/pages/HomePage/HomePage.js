import React, { Component } from 'react';
import { compose } from "recompose";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import Products from "../../components/Products/Products";
import { actions as productsActions } from "../../store/actions/productsActions";

import styles from "./HomePage.module.scss";

class HomePage extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  renderProducts(category) {
    return this.props.products.data.filter(product => product.featured && product.category === category);
  };

  render() {
    const { data, isLoading } = this.props.products;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className={styles.container}>
        <h1 className={styles.headerBig}>Welcome to our store</h1>

        <h2 className={styles.headerSmall}>Desktops</h2>
        {
          data && (
            <Products products={this.renderProducts("desktop")} />
          )
        }
        
        <h2 className={styles.headerSmall}>Tablets</h2>
        {
          data && (
            <Products products={this.renderProducts("tablet")} />
          )
        }
        
    </div>
    );
  };
};

HomePage.propTypes = {
  products: PropTypes.shape({
    isLoading: PropTypes.bool,
    data: PropTypes.array | null,
    error: PropTypes.string | null,
  }),
  getProducts: PropTypes.func,
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
      ...productsActions
    }
  )
)(HomePage);
