import React from "react";

import "./style.css";

export default function GiraffeCard() {
  return (
    <div className="giraffeCard ">
      <button className="editButton centered">
        <i className="fas fa-ellipsis-h"> </i>
      </button>
      <div className="image">
        <img src></img>
      </div>
      <div className="info">
        <h3>Name</h3>
        <div className="icons centered">
          <i className="fas fa-venus-mars"></i>
          <i className="fas fa-balance-scale"></i>
          <i className="fas fa-ruler-vertical"></i>
        </div>
        <div className="general centered">
          <span>X</span> <span>X</span> <span>X</span>
        </div>
        <div className="parameters">
          <p>
            <strong>Цвет:</strong>xx
          </p>
          <p>
            <strong>Диета:</strong>xx
          </p>
          <p>
            <strong>Характер:</strong>xx
          </p>
        </div>
      </div>
    </div>
  );
}
