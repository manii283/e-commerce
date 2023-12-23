import React, {useContext} from "react";

const Cart = ({ cartCount, selectedItems, total }) => {

  return (
    <div className="container">
      <div className="cart-container" style={{ marginTop: "100px" }}>
        <h2> Shopping Cart </h2>
        <span> Total Items: {cartCount}</span>
      </div>

      <div>
        <h2>Billing</h2>
        <ul>
          {selectedItems.map((item) => (
            <li key={item.name}>
              {item.name} - ${item.price}
            </li> 
          ))}
        </ul>
        <p>Total: ${total}</p>
      </div>
    </div>
  );
};

export default Cart;
