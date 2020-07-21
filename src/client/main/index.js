import React from "react";
import { render } from "react-dom";
import App from "./components";
import "normalize.css";
import { Provider } from "react-redux";
import { createStore } from "redux";
import giraffeReducer from "./Components/Redux/Reducers/giraffeReducer";

const store = createStore(giraffeReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#react-root")
);
