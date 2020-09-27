const tmListReducer = (state = [], action) => {
    switch (action.type) {
      case "CHANGETMLIST":
        return action.value;
      default:
        return state;
    }
  };

  export default tmListReducer;