import { CartDetails } from "./CartDetails";

export function CartList({ cart, addToCart, subtractFromCart }) {
  console.log(cart);
  const cartLength = cart.filter((item) => item.cartCount > 0).length;
  if (cartLength !== 0) {
    return (
      <section className="cartList">
        <h2>Cart</h2>
        {/* This might have to be broken out into a heading or something*/}
        <ul>
          {cart.map((item) => {
            if (item.cartCount > 0) {
              return (
                <li key={item.id}>
                  <CartDetails
                    item={item}
                    addToCart={addToCart}
                    subtractFromCart={subtractFromCart}
                  ></CartDetails>
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
