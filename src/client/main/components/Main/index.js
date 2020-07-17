import React from "react";
import GiraffeContainer from "../GiraffeContainer";
import Menu from "../Menu";
import "./style.scss";

export default function Main() {
  return (
    <div className="main">
      <Menu />
      <div className="title">
        <h2>Жирафы</h2>
        <button className="addButton centered">
          <i className="fas fa-plus fa-lg"> </i>
        </button>
      </div>
      <GiraffeContainer />
    </div>
  );
}
