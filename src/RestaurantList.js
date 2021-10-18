import React from "react";
import { useEffect } from "react";
export const RestaurantList = ({ loadRestaurants }) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);
  return <div>RestaurantList</div>;
};

export default RestaurantList;
//Example of a named export component
//Now takes in the load restaurants function
//Use effect takes in a dependency array (for this we have the class we need)
//Use effect performs something after render is called
//We place inside function/class to use any variables e.g. load restaurants function
//Stepping down to a unit test
