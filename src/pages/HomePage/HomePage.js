import React, { Component } from 'react';

import ProductsService from "../../services/products.service";
import Products from "../../components/Products/Products";

import styles from "./HomePage.module.scss";

class HomePage extends Component {
  renderProducts = (category) => {
    return ProductsService.getProducts()
      .filter(product => product.category === category)
      .filter(product => product.featured === true);
  };

  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.headerBig}>Welcome to our store</h1>

        <h2 className={styles.headerSmall}>Desktops</h2>
        <Products products={this.renderProducts("desktop")} />

        <h2 className={styles.headerSmall}>Tablets</h2>
        <Products products={this.renderProducts("tablet")} />
    </div>
    );
  };
};

export default HomePage;
