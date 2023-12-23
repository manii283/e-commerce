import React, { createContext, useState } from "react";
import TV from "../assets/TV.jpg";
import headphone from '../assets/headphone.jpg'
import IPHONE from '../assets/IPHONE.jpg'
import MICROPHONE from '../assets/MICROPHONE.jpg'
import PERFUME from '../assets/PERFUME.jpg'
import WATCH from '../assets/WATCH.jpg'
import SHOES from '../assets/SHOES.jpg'
import phone from '../assets/headphone.jpg'

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, useProduct] = useState([
    { id: 1, name: "TV", price: 300, image: TV },
    { id: 2, name: "headphone", price: 300, image: headphone, status: "new" },
    { id: 3, name: "IPHONE", price: 300, image: IPHONE, status: "hot" },
    { id: 4, name: "MICROPHONE", price: 300, image: MICROPHONE, status: "new" },
    { id: 5, name: "PERFUME", price: 300, image: PERFUME, status: "hot" },
    { id: 6, name: "phone", price: 300, image: phone, status: "new" },
    { id: 7, name: "SHOES", price: 300, image: SHOES, status: "hot" },
    { id: 8, name: "WATCH", price: 300, image: WATCH, status: "new" },
  ]);
  return (
    <ProductContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
