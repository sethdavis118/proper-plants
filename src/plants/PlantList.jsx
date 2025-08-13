import { PlantDetails } from "./PlantDetails";

export function PlantList({ plants, addToCart }) {
  return (
    <section className="plantList">
      <h2>Plants</h2>{" "}
      {/* This might have to be broken out into a heading or something*/}
      <ul className="plantsList">
        {plants.map((plant) => {
          return (
            <li key={plant.id}>
              <PlantDetails plant={plant} addToCart={addToCart} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
