import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import "./header.css";

const Header = () => {
  return (
    <nav className="nav-menu container">
      <div className="logo">
        <Link to="/">LA SK.</Link>
      </div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/shop">SHOP</Link>
        </li>
      </ul>
      <Cart />
    </nav>
  );
};

export default Header;
