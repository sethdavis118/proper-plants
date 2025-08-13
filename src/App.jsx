import PLANTS from "./data";
import { PlantList } from "./plants/PlantList";
import { CartList } from "./cart/CartList";

export default function App() {
  return (
    <>
      <h1>Proper Plants</h1>
      <section className="mainArea">
        <PlantList plants={PLANTS}></PlantList>
        <CartList />
      </section>
    </>
  );
}
