// Good practice to abstract Action variables as strings are easier to mess up.
import { Actions } from "../actions/action_type_vars";

// Actually run the logic. Take in STATE and ACTION and return the output of REDUCING 
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case Actions.INCREMENT:
      return state + 1;
    case Actions.DECREMENT:
      return state - 1;
    case Actions.RESET:
      return (state = 0);
    default:
      return state;
    }
};

export default counterReducer;