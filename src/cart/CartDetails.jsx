export function CartDetails({ item, addToCart, subtractFromCart }) {
  return (
    <section className="cart-items">
      <p className="cart-text">
        {item.image} {item.name}
      </p>
      <section className="cart-functions">
        <button
          onClick={() => subtractFromCart(item.id)}
          className="subtract-button action-button"
        >
          -
        </button>
        <p className="cart-count">{item.cartCount}</p>{" "}
        <button
          onClick={() => addToCart(item.id)}
          className="add-button action-button"
        >
          +
        </button>
      </section>
    </section>
  );
}
