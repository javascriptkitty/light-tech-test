import React from "react";
import { render } from "react-dom";
import App from "./components";
import "normalize.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import giraffeReducer from "./Components/Redux/Reducers/giraffeReducer";
import thunk from "redux-thunk";

const store = createStore(giraffeReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#react-root")
);
