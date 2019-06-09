import React, { Component, Fragment } from 'react';
import { compose } from "recompose";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import Products from "../../components/Products/Products"
import InputField from "../../components/InputField/InputField"
import { actions as productsActions } from "../../store/actions/productsActions";

import styles from "./CatalogPage.module.scss";

class CatalogPage extends Component {
  state = {
    manufacturer: "All",
    searchText: "",
  }

  componentDidMount() {
    this.props.getProducts();
  }

  getManufactures() {
    const { data } = this.props.products;
    const products = [...new Set(data.map(product => product.manufacture))];
    products.unshift("All");

    return products;
  }

  getFilteredProducts = (selectedManufacturer, searchText) => {
    const { data } = this.props.products;
    const manufacturer = selectedManufacturer.toLowerCase();
    const text = searchText.toLowerCase().trim();

    let filteredProducts = data;
    if (manufacturer !== "all") {
      filteredProducts = data.filter(({ manufacture }) => {
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
    const { data, isLoading } = this.props.products;

    if (isLoading) {
      return <p>Loading...</p>;
    }

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
                  { data &&
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
            {
              data && <Products products={products} />
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CatalogPage.propTypes = {
  products: PropTypes.shape({
    isLoading: PropTypes.bool,
    data: PropTypes.array,
    error: PropTypes.string,
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
)(CatalogPage);
