import React, { Component } from 'react';

import ProductsService from "../../services/products.service";
import Products from "../../components/Products/Products"

import styles from "./CatalogPage.module.scss";

class CatalogPage extends Component {
  state = {
    selectedProduct: "all"
  }

  renderProducts = (selectedProduct) => {
    const selected = selectedProduct.toLowerCase();
    let products;
    if (selected === "all") {
      products = ProductsService.getProducts();
    } else {
      products = ProductsService.getProducts().filter(product => {
        return product.name.toLowerCase().includes(selected) || product.manufacture.toLowerCase().includes(selected);
      });
    }

    return products;
  };

  handleChange = e => {
    this.setState({
      selectedProduct: e.target.value
    });
  };

  render() {
    const { selectedProduct } = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.headerBig}>Catalog</h1>

        <div className={styles.catalog}>
          <div className={styles.columnLeft}>
            <div className={styles.filter}>
              <div className={styles.filterHeader}>

              <h4>Search</h4>
              <a href="#" className={styles.clear}>Clear</a>
              </div>
              <div>
                <input type="text" placeholder="search..." onChange={this.handleChange} />
              </div>

              <h4>Manufacturer</h4>
              <div>
                <div>
                  <input type="radio" name="manufacturere" id="all" value="all" onChange={this.handleChange} checked={selectedProduct === "all"} />
                  <label htmlFor="all">All</label>
                </div>
                <div>
                  <input type="radio" name="manufacturere" id="apple" value="apple" onChange={this.handleChange} checked={selectedProduct === "apple"} />
                  <label htmlFor="apple">Apple</label>
                </div>
                <div>
                  <input type="radio" name="manufacturere" id="dell" value="dell" onChange={this.handleChange} checked={selectedProduct === "dell"} />
                  <label htmlFor="dell">Dell</label>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.columnRight}>
            <Products products={this.renderProducts(selectedProduct)} />
          </div>
        </div>
      </div>
    );
  }
}

export default CatalogPage;
