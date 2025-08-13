import { ShowData } from "../Context";

export function CartDetails({ item }) {
  const data = ShowData();
  return (
    <section className="cart-items">
      <p className="cart-text">
        {item.image} {item.name}
      </p>
      <section className="cart-functions">
        <button
          onClick={() => data.subtractFromCart(item.id)}
          className="subtract-button action-button"
        >
          -
        </button>
        <p className="cart-count">{item.cartCount}</p>{" "}
        <button
          onClick={() => data.addToCart(item.id)}
          className="add-button action-button"
        >
          +
        </button>
      </section>
    </section>
  );
}
