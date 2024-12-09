'use client'
import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToList = (item) => {
    // console.log(item);
    setItems((prevItems) => [...prevItems, item]);
  };

  const cartContext = {
    items: items,
    addItem: addItemToList,
    removeItem: (id) => {},
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
