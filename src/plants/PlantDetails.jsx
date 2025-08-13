import { ShowData } from "../Context";

export function PlantDetails({ plant }) {
  const data = ShowData();
  return (
    <section className="plant">
      <h2 className="plantImg">{plant.image}</h2>{" "}
      {/* Maybe make this a heading? */}
      <h3 className="plantName">{plant.name}</h3>
      <button onClick={() => data.addToCart(plant.id)}>Add to cart</button>{" "}
      {/* Add function here later? */}
    </section>
  );
}
