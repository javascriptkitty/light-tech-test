import React from "react";
import GiraffeCard from "../GiraffeCard";
import "./style.css";

export default function GiraffeContainer() {
  return (
    <div className="giraffeContainer">
      <div className="title">
        <h2>Жирафы</h2>
        <button className="addButton centered">
          <i className="fas fa-plus fa-lg"> </i>
        </button>
      </div>
      <GiraffeCard />
    </div>
  );
}
