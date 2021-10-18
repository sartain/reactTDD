import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { loadRestaurants } from "../src/store/restaurants/actions";
export const RestaurantList = ({ loadRestaurants, restaurants }) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);
  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.records,
});

const mapDispatchToProps = { loadRestaurants };

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
//Example of a named export component
//Now takes in the load restaurants function
//Use effect takes in a dependency array (for this we have the class we need)
//Use effect performs something after render is called
//We place inside function/class to use any variables e.g. load restaurants function
//Stepping down to a unit test
