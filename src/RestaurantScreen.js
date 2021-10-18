import React from "react";
import RestaurantList from "./RestaurantList.js";
const restaurants = [
  { id: 1, name: "Sushi Place" },
  { id: 2, name: "Pizza Place" },
];
const RestaurantScreen = () => (
  <div>
    <h1>Restaurants</h1>
    <RestaurantList loadRestaurants={() => {}} restaurants={restaurants} />
  </div>
);
export default RestaurantScreen;
