import React from "react";
import "./style.scss";
import EditCard from "../EditCard";

export default function GiraffeCard() {
  return (
    <div className="giraffeCard ">
      <button className="editButton centered">
        <i className="fas fa-ellipsis-h" />
      </button>
      <div className="image">
        <img></img>
      </div>
      <div className="info">
        <h3>Имя</h3>
        <div className="icons centered">
          <i className="fas fa-venus-mars" />
          <i className="fas fa-balance-scale" style={{ paddingRight: "3px" }} />
          <i className="fas fa-ruler-vertical" />
        </div>
        <div className="general centered">
          <span>-</span> <span>-</span> <span>-</span>
        </div>
        <div className="parameters">
          <p>
            <strong>Цвет:</strong>
          </p>
          <p>
            <strong>Диета:</strong>
          </p>
          <p>
            <strong>Характер:</strong>
          </p>
        </div>
      </div>
      <button className="saveButton centered">Сохранить</button>
      <EditCard />
    </div>
  );
}
