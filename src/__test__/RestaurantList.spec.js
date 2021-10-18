import { render } from "@testing-library/react";
import { RestaurantList } from "../RestaurantList";
describe("RestaurantList", () => {
  it("loads restaurants on first render", () => {
    const emptyRestaurants = [];
    const loadRestaurants = jest.fn().mockName("loadRestaurants");
    render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={emptyRestaurants}
      />
    );
    expect(loadRestaurants).toHaveBeenCalled();
  });
  it("displays the restaurants", () => {
    const noop = () => {}; //The noop function does nothing
    const restaurants = [
      { id: 1, name: "Sushi Place" },
      { id: 2, name: "Pizza Place" },
    ];

    const { queryByText } = render(
      <RestaurantList loadRestaurants={noop} restaurants={restaurants} />
    );
    expect(queryByText("Sushi Place")).not.toBeNull(); //Query By Text contains references to elements
    expect(queryByText("Pizza Place")).not.toBeNull();
  });
});

//We don't want to connect anything to a redux store, instead connecting to a mock object.
//Jest mock function allows us to check if a function loadRestaurants was called
//Mock name makes this more readable allowing us to set an actual name
