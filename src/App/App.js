import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import HomePage from "../pages/HomePage/HomePage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import AboutPage from "../pages/AboutPage/AboutPage";
import CartPage from "../pages/CartPage/CartPage";

import styles from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.wrapper}>
          <Menu />
          <Switch>
            <Route exact path="/" render={() => <HomePage/>}/>
            <Route path="/catalog" render={() => <CatalogPage />}/>
            <Route path="/about" component={AboutPage}/>  
            <Route path="/cart" component={CartPage}/>  
            <Route render={() => <h1>Page not found</h1>}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
