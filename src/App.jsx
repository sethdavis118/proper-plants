import { useState } from "react";
import PLANTS from "./data";
import { PlantList } from "./plants/PlantList";
import { CartList } from "./cart/CartList";

export default function App() {
  // const [cart, setCart] = useState([PLANTS[0], PLANTS[1]]);
  const demo = PLANTS.map((item) => ({ ...item, cartCount: 0 }));
  // console.log(demo);
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

  return (
    <>
      <h1>Proper Plants</h1>
      <section className="mainArea">
        <PlantList plants={PLANTS} addToCart={addToCart}></PlantList>
        <CartList
          cart={cart}
          addToCart={addToCart}
          subtractFromCart={subtractFromCart}
        ></CartList>
      </section>
    </>
  );
}
