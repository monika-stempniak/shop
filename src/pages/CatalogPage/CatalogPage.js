import React, { Component, Fragment } from 'react';

import ProductsService from "../../services/products.service";
import Products from "../../components/Products/Products"
import InputField from "../../components/InputField/InputField"

import styles from "./CatalogPage.module.scss";

class CatalogPage extends Component {
  state = {
    selectedProduct: "all",
    searchValue: ""
  }

  manufacturers = [
    {
      "id": "all",
      "label": "All",
    },
    {
      "id": "apple",
      "label": "Apple",
    },
    {
      "id": "dell",
      "label": "Dell",
    }
  ];

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
      selectedProduct: e.target.value,
      searchValue: e.target.value
    });
  };

  handleClear = () => {
    this.setState({
      selectedProduct: "all",
      searchValue: ""
    });
  }

  render() {
    const { selectedProduct, searchValue } = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.headerBig}>Catalog</h1>

        <div className={styles.catalog}>
          <div className={styles.columnLeft}>
            <div className={styles.filter}>
              <div className={styles.filterHeader}>

              <h4>Search</h4>
              <button className={styles.clear} onClick={this.handleClear}>Clear</button>
              </div>
              <InputField
                type="text"
                placeholder="search..." 
                name="search"
                id="search"
                value={searchValue}
                handleChange={this.handleChange}  
                label="Search"
                className={styles.visuallyhidden}
              />

              <h4>Manufacturer</h4>
              <Fragment>
                {
                  this.manufacturers.map(manufacturer => (
                    <InputField
                      key={manufacturer.id}
                      type="radio"
                      name="manufacturer"
                      id={manufacturer.id}
                      value={manufacturer.id}
                      handleChange={this.handleChange}  
                      checked={selectedProduct === manufacturer.id}
                      label={manufacturer.label}
                    />
                  ))
                }
              </Fragment>
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
