import React from "react";
import "./style.scss";

export default function Capacity() {
  return (
    <div className="capacity">
      <div className="perc">
        <p>
          75%<span>Заполнение вольера</span>
        </p>
        <button className="closeBtn">
          <i className="fas fa-plus" />
        </button>
      </div>
      <div className="info">
        <div className="progress">
          <div className="progressLine" />
        </div>

        <button className="infoBtn centered">Информация</button>
      </div>
    </div>
  );
}
