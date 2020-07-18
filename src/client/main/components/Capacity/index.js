import React from "react";
import "./style.scss";

export default function Capacity() {
  return (
    <div className="capacity">
      <div className="info">
        <div className="perc">
          <h2>75%</h2>
          <p>Заполнение вольера</p>
        </div>
        <div className="progress"></div>
      </div>
      <div className="close-info">
        <button>
          <i className="fas fa-close" />
        </button>
        <button>Информация</button>
      </div>
    </div>
  );
}
