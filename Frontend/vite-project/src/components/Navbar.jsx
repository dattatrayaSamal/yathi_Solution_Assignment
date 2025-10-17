import React from "react";

const Navbar = ({ cartCount }) => {
  return (
    <nav>
      <h1>Food Delivery</h1>
      <div>cart: {cartCount}</div>
    </nav>
  );
};
export default Navbar;
