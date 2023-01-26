// Good practice to abstract Action variables as strings are easier to mess up.
import { Actions } from "./action_type_vars";

// Defining the ACTIONS that will be DISPATCHED
export const increment = () => {
  return {
    type: Actions.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: Actions.DECREMENT,
  };
};

export const reset = () => {
  return {
    type: Actions.RESET,
  };
};

export const logIn = () => {
  return {
    type: Actions.LOG_IN,
  };
};

export const logOut = () => {
  return {
    type: Actions.LOG_OUT,
  }
}