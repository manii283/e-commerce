import React, {useState} from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount, addToCart }) => {

  return (
    <nav>
      <ul className="left">
        <li>
          <Link to="/"> ABC Shopping </Link>
        </li>
      </ul>
      <ul className="right">
        <li>
          <Link to="cart">
            <span className="shoppingCart">
              <i class="fa-solid fa-cart-plus"></i>
              <span className="cartCount"> {cartCount} </span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
