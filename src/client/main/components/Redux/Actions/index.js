import axios from "axios";

export const LOADING = "loading";
export const GET_GIRAFFES = "getGiraffes";
export const UPDATE_GIRAFFES = "updateGiraffes";
export const UPDATE_GIRAFFES_SUCCESS = "updateGiraffesSuccess";
export const ADD_GIRAFFES = "addGiraffes";
export const ADD_GIRAFFES_SUCCESS = "addGiraffesSuccess";
export const DELETE_GIRAFFES = "deleteGiraffes";
export const DELETE_GIRAFFES_SUCCESS = "deleteGiraffesSuccess";

export const updateAction = (index, newValue) => {
  return (dispatch) => {
    dispatch({ type: LOADING });
    const url = `/api/giraffe/${index}`;
    axios.put(url, newValue).then((res) => {
      dispatch({ type: UPDATE_GIRAFFES, newValue });
    });
  };
};

export const addAction = (value) => {
  return (dispatch) => {
    // dispatch({ type: LOADING });
    axios.post("/api/giraffe", value).then((res) => {
      dispatch(addActionSuccess(res.data));
    });
  };
};

export const addActionSuccess = (value) => {
  return {
    type: ADD_GIRAFFES,
    value,
  };
};

export const deleteAction = (index) => {
  return (dispatch) => {
    // dispatch({ type: LOADING });
    const url = `/api/giraffe/${index}`;
    axios.delete(url).then((res) => {
      dispatch(addDeleteSuccess(index));
    });
  };
};
export const addDeleteSuccess = (index) => {
  return {
    type: DELETE_GIRAFFES,
    index,
  };
};

export const fetchAction = () => {
  return (dispatch) => {
    dispatch({ type: LOADING });
    axios.get("/api/giraffe").then((res) => {
      dispatch({ type: GET_GIRAFFES, giraffes: res.data });
    });
  };
};
