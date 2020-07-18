import React, { useState } from "react";
import "./style.scss";
import EditCard from "../EditCard";

const GiraffeCard = () => {
  const [mode, setMode] = useState("view");
  const [editBlock, showEditBlock] = useState(false);

  const onSetEdit = () => {
    debugger;
    setMode("edit");
    showEditBlock(false);
  };
  const onDelete = () => {};
  const onDotsClick = () => {
    showEditBlock(!editBlock);
  };

  const cardClassName = mode == "view" ? "giraffeCard" : "giraffeCard editCard";

  return (
    <div className={cardClassName}>
      <button className="editButton" onClick={onDotsClick}>
        <i className="fas fa-ellipsis-h" />
      </button>
      <div className="image centered">
        <i className="fas fa-camera" />
      </div>
      <div className="info">
        <h3>Имя</h3>
        <div className="icons">
          <i className="fas fa-venus-mars" />
          <i className="fas fa-balance-scale" />
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
      {mode === "edit" ? (
        <button className="saveButton centered">Сохранить</button>
      ) : null}
      {editBlock ? <EditCard setEdit={onSetEdit} delete={onDelete} /> : null}
    </div>
  );
};

export default GiraffeCard;
