const circleReducer = (state = "circle", action) => {
    switch (action.type) {
      case "CHANGECIRCLE":
        return action.value;
      default:
        return state;
    }
  };

  export default circleReducer;