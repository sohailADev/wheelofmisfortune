const timerReducer = (state = 0, action) => {
    switch (action.type) {
      case "CHANGETIMEDELTA":
        return parseInt(action.value)
      default:
        return state;
    }
  };
  export default timerReducer;