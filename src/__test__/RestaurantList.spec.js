import { render } from "@testing-library/react";
import { RestaurantList } from "../RestaurantList";
describe("RestaurantList", () => {
  it("loads restaurants on first render", () => {
    const loadRestaurants = jest.fn().mockName("loadRestaurants");
    render(<RestaurantList loadRestaurants={loadRestaurants} />);
    expect(loadRestaurants).toHaveBeenCalled();
  });
});

//We don't want to connect anything to a redux store, instead connecting to a mock object.
//Jest mock function allows us to check if a function loadRestaurants was called
//Mock name makes this more readable allowing us to set an actual name
