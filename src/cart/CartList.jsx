import { CartDetails } from "./CartDetails";
import { ShowData } from "../Context";

export function CartList() {
  const data = ShowData();
  console.log(data.cart);
  const cartLength = data.cart.filter((item) => item.cartCount > 0).length;
  if (cartLength !== 0) {
    return (
      <section className="cartList">
        <h2>Cart</h2>
        {/* This might have to be broken out into a heading or something*/}
        <ul>
          {data.cart.map((item) => {
            if (item.cartCount > 0) {
              return (
                <li key={item.id}>
                  <CartDetails item={item}></CartDetails>
                </li>
              );
            }
          })}
        </ul>
      </section>
    );
  } else {
    return (
      <section className="cartList">
        <h2>Cart</h2>
        <p>Your cart is empty</p>
      </section>
    );
  }
}
