import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

import styles from "./App.module.scss";

const AboutPage = withRouter(React.lazy(() => import("../pages/AboutPage/AboutPage")));
const CatalogPage = withRouter(React.lazy(() => import("../pages/CatalogPage/CatalogPage")));
const CartPage = withRouter(React.lazy(() => import("../pages/CartPage/CartPage")));
const HomePage = withRouter(React.lazy(() => import("../pages/HomePage/HomePage")));

const App = () => (
  <Router>
    <div className={styles.wrapper}>
      <Menu />
      <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={HomePage} />
            <Route path="/catalog" component={CatalogPage}/>
            <Route path="/cart" component={CartPage}/>  
            <Route path="/about" component={AboutPage}/>  
          </Suspense>
        <Route render={() => <h1>Page not found</h1>}/>
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
