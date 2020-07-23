import axios from "axios";
import * as ActionType from "./actionTypes.js";

export const updateAction = (index, newValue) => {
  return (dispatch) => {
    const url = `/api/giraffe/${index}`;
    axios.put(url, newValue).then((res) => {
      dispatch({ type: ActionType.UPDATE_GIRAFFES, newValue });
    });
  };
};

export const addAction = (value) => {
  return (dispatch) => {
    axios.post("/api/giraffe", value).then((res) => {
      dispatch({ type: ActionType.ADD_GIRAFFES, value });
    });
  };
};
export const deleteAction = (index) => {
  return (dispatch) => {
    const url = `/api/giraffe/${index}`;
    axios.delete(url).then((res) => {
      dispatch({ type: ActionType.DELETE_GIRAFFES, index });
    });
  };
};

export const fetchAction = () => {
  return (dispatch) => {
    dispatch({ type: ActionType.LOADING });
    axios.get("/api/giraffe").then((res) => {
      dispatch({ type: ActionType.GET_GIRAFFES, giraffes: res.data });
    });
  };
};
