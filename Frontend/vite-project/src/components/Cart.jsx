import React from "react";

const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h3>Your Cart</h3>
      {cart.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div>
              <span>{item.name}</span>
              <span>{item.price}</span>
            </div>
          ))}
          <p>Total: ${total}</p>
          <button>Place Order</button>
        </>
      )}
    </div>
  );
};
export default Cart;
