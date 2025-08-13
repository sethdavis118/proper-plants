import { createContext, useContext, useState } from "react";
//is useState needed?
import PLANTS from "./data";

const Context = createContext();

export function DataProvider({ children }) {
  const demo = PLANTS.map((item) => ({ ...item, cartCount: 0 }));
  const [cart, setCart] = useState(demo);

  function addToCart(itemId) {
    setCart(
      cart.map((item) => {
        if (item.id === itemId) {
          return { ...item, cartCount: item.cartCount + 1 };
        } else {
          return item;
        }
      })
    );
  }

  function subtractFromCart(itemId) {
    setCart(
      cart.map((item) => {
        if (item.id === itemId) {
          return { ...item, cartCount: item.cartCount - 1 };
        } else {
          return item;
        }
      })
    );
  }
  const value = { cart, addToCart, subtractFromCart }; // Do I need to add setCart?
  return (
    <Context.Provider value={value}>{children}</Context.Provider> // I don't have a children thing. Is that needed?
  );
}

export function ShowData() {
  const context = useContext(Context);
  return context;
}
