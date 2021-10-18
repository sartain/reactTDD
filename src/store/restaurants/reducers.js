import { combineReducers } from "redux";
import { STORE_RESTAURANTS } from "./actions";
const records = (state = [], action) => {
  switch (action.type) {
    case STORE_RESTAURANTS:
      return action.records;
    default:
      return state;
  }
};

export default combineReducers({
  records,
});

//Needs to take action and state into account
//Decides how to update the state
//And then return the new state
//Often with switch case or if/else statement
//In this example, store restaurants updates the stored restaurants or
//Returns stat eotherwise (without chaanging)
