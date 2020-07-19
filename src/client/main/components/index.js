import React from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import { hot } from "react-hot-loader/root";
import "./style.scss";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Main />
    </div>
  );
}

export default hot(App);
