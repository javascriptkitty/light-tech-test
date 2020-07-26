import * as ActionType from "../Actions";

const initialState = { giraffes: [], loading: false };

const giraffeReducer = (state = initialState, action) => {
  debugger;
  const newState = { ...state };

  if (action == null) {
    return state;
  }
  let currentIndex;
  let giraffes;

  console.log(action);
  console.log(state);
  switch (action.type) {
    case ActionType.UPDATE_GIRAFFES:
      currentIndex = newState.giraffes.findIndex(
        (el) => el._id === action.newValue._id
      );
      newState[currentIndex] = action.newValue;
      return { ...newState, loading: false };
    case ActionType.ADD_GIRAFFES:
      giraffes = [action.value, ...newState.giraffes];

      return { ...newState, giraffes, loading: false };
    case ActionType.DELETE_GIRAFFES:
      currentIndex = newState.giraffes.findIndex(
        (el) => el._id === action.index
      );
      const newGiraffes = [...newState.giraffes];
      newGiraffes.splice(currentIndex, 1);
      newState.giraffes = newGiraffes;
      console.log(newState.giraffes);
      return { ...newState, loading: false };
    case ActionType.LOADING:
      return { ...state, loading: true };
    case ActionType.GET_GIRAFFES:
      return { ...state, giraffes: action.giraffes, loading: false };
    default:
      return state;
  }
};

export default giraffeReducer;
