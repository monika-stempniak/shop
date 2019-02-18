import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import HomePage from "../pages/HomePage/HomePage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import AboutPage from "../pages/AboutPage/AboutPage";

import styles from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={styles.wrapper}>
          <Menu />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/catalog" component={CatalogPage}/>
            <Route path="/about" component={AboutPage}/>  
            <Route render={() => <h1>Page not found</h1>}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
