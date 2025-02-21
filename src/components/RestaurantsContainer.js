import Restaurant from "./Restaurant";
import { restaurants } from "../data/data.js";

export const RestaurantsContainer = () => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant restaurant={restaurant} />
      ))}
    </div>
  );
};
