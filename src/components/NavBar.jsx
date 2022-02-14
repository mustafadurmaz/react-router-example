import React from "react";
import { Link } from "react-router-dom";

{
  /* TODO: set links here for Home, Products and Admin pages. */
}

const NavBar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/dashboard">Admin</Link>
      </li>
    </ul>
  );
};

export default NavBar;