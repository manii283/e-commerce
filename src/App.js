import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Product from "./components/Product";
import ProductContext from "./components/ProductContext";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setCartCount(cartCount + 1);
    setSelectedItems([...selectedItems, item]);
    updateTotal(item.price);
    console.log(selectedItems);
  };

  const updateTotal = (itemPrice) => {
    setTotal(total + itemPrice);
    console.log(total);
  };

  return (
    <div>
      <ProductContext>
        <Navbar cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<Product addToCart={addToCart} />} />
          <Route
            excat
            path="/cart"
            element={
              <Cart
                cartCount={cartCount}
                selectedItems={selectedItems}
                total={total}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ProductContext>
    </div>
  );
};
export default App;
