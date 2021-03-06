import React from "react";
import { NavLink, } from 'react-router-dom';

import ProductsCount from "../../../components/ProductsCount/ProductsCount";

import styles from "./Menu.module.scss"

const Menu = () => (
  <nav className={styles.navbar}>
    <div className={styles.container}>
      <ul className={styles.nav}>
        <li>
          <NavLink exact to="/" activeClassName={styles.activeLink}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/catalog" activeClassName={styles.activeLink}>Catalog</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName={styles.activeLink}>About</NavLink>
        </li>
        <li className={styles.cart}>
          <NavLink to="/cart" activeClassName={styles.activeLink}>
            Cart
          </NavLink>
          <ProductsCount />
        </li>
      </ul>
    </div>
</nav>
);

export default Menu;
