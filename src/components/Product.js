import React, { useContext, useState } from "react";
import { ProductContext } from "./ProductContext";
import Banner from "./Banner";

const Product = ({ addToCart, name, price }) => {
  const { products } = useContext(ProductContext);

  return (
    <div className="container">
      <Banner />
      <div className="products">
        {products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt=" not found" />
              </div>
              <div className="product-details">
                <div className="product-name">{product.name}</div>
                <div className="product-price">$ {product.price}.00</div>
              </div>
              <div className="add-to-cart" onClick={() => addToCart({ name, price })}>
                add to cart
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
