import React, { Component, Fragment } from 'react';

import ProductsService from "../../services/products.service";
import Products from "../../components/Products/Products"
import InputField from "../../components/InputField/InputField"

import styles from "./CatalogPage.module.scss";

class CatalogPage extends Component {
  state = {
    manufacturer: "All",
    searchText: "",
    products: ProductsService.getProducts(),
  }

  getManufactures() {
    const products =  [...new Set(this.state.products.map(product => product.manufacture))];
    products.unshift("All");

    return products;
  }

  getFilteredProducts = (selectedManufacturer, searchText) => {
    const { products } = this.state;
    const manufacturer = selectedManufacturer.toLowerCase();
    const text = searchText.toLowerCase().trim();

    let filteredProducts = products;
    if (manufacturer !== "all") {
      filteredProducts = products.filter(({ manufacture }) => {
        return manufacture.toLowerCase() === manufacturer;
      });
    } 
    
    if (text) {
      filteredProducts = filteredProducts.filter(product => {
        return Object.keys(product).some(key => {
          if(key === "name" || key === "manufacture" || key === "category") {
            return product[key].toLowerCase().includes(text);
          }
          return false;
        });
      });
    }

    return filteredProducts;
  };

  handleSearch = e => {
    this.setState({
      searchText: e.target.value
    });
  };

  handleSelect = e => {
    this.setState({
      manufacturer: e.target.value,
    });
  };

  handleClear = () => {
    this.setState({
      manufacturer: "All",
      searchText: ""
    });
  }

  render() {
    const { manufacturer, searchText } = this.state;

    const products = this.getFilteredProducts(manufacturer, searchText);

    return (
      <div className={styles.wrapper}>
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
                  value={searchText}
                  handleChange={this.handleSearch}  
                  label="Search"
                  className={styles.visuallyhidden}
                />

                <h4>Manufacturer</h4>
                <Fragment>
                  {
                    this.getManufactures().map(manufacture => (
                      <InputField
                        key={manufacture}
                        type="radio"
                        name="manufacturer"
                        id={manufacture}
                        value={manufacture}
                        handleChange={this.handleSelect}  
                        checked={manufacturer === manufacture}
                        label={manufacture}
                      />
                    ))
                  }
                </Fragment>
              </div>
            </div>

            <div className={styles.columnRight}>
              <Products products={products} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CatalogPage;
