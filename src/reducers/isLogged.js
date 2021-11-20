const loggedReducer = (state = null, action) => {
  switch (action.type) {
    case "SIGNIN":
      return {
        user:action.payload
      };
    default:
      return state;
  }
};

export default loggedReducer;
