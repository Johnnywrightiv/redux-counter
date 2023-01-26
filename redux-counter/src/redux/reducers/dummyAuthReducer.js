const dummyAuthReducer = (state = false, action) => {
  // alert("action: ", action)
  // alert("action.type:", action.type)
  
  switch (action.type) {
    case "LOG_IN":
      return true;
    case "LOG_OUT":
      return false;
    default:
      return state;
  }
};
export default dummyAuthReducer;