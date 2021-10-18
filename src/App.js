import RestaurantScreen from "./RestaurantScreen.js";
import { Provider } from "react-redux";
import store from "./store";
const App = () => (
  <Provider store={store}>
    <RestaurantScreen />
  </Provider>
);

export default App;
/*
API KEY : fwvNFKji7z0TOl5KCzrKwNLt6e2H5m7k
*/

//In React TDD it is common to write what we want (code you wish you had)
//This can include writing components that don't yet exist knowing we will add them
//in the future.
//the redux store is the way of setting up / configuring a redux-store in the application
