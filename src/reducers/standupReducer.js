const standupReducer = (state = false, action) => {
    switch (action.type) {
      case "SAVE":
        return true;
      case "RESET":
        return false;
      default:
        return state;
    }
  };

  export default standupReducer;