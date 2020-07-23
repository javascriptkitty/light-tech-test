import * as ActionType from "../Actions/actionTypes.js";

const initialState = { giraffes: [], loading: false };

const giraffeReducer = (state = initialState, action) => {
  debugger;
  const newState = { ...state };

  if (action == null) {
    return state;
  }
  let currentIndex;
  switch (action.type) {
    case "updateGiraffes":
      currentIndex = newState.giraffes.findIndex(
        (el) => el._id === action.index
      );
      newState[currentIndex] = action.newValue;
      return newState;
    case "addGiraffes":
      newState.giraffes.unshift(action.value);
      return newState;
    case "deleteGiraffes":
      currentIndex = newState.giraffes.findIndex(
        (el) => el._id === action.index
      );
      newState.splice(currentIndex, i);
      return newState;
    case "loading":
      return { ...state, loading: true };
    case "getGiraffes":
      return { ...state, giraffes: action.giraffes, loading: false };
    default:
      return state;
  }
};

export default giraffeReducer;
