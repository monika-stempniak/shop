import React, { Component } from 'react';

import ProductsService from "../../services/products.service" ;
import Product from "../../components/Product/Product"

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
        <div className={styles.products}>
          { 
            this.renderProducts("desktop").map(product => 
              <Product 
                image={product.image}
                price={product.amount}
                name={product.name}
              />
            )
          }
        </div>

        <h2 className={styles.headerSmall}>Tablets</h2>
        <div className={styles.products}>
          { 
            this.renderProducts("tablet").map(product => 
              <Product 
                image={product.image}
                price={product.amount}
                name={product.name}
              />
            )
          }
        </div>
    </div>
    );
  }
}

export default HomePage;
