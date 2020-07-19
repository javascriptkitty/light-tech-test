import React, { useState } from "react";
import "./style.scss";
import EditCard from "../EditCard";
import UploadImage from "../UploadImage";

const GiraffeCard = () => {
  const [mode, setMode] = useState("edit");
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
        <UploadImage />
      </div>
      <div className="info">
        {RenderEditView(mode, "xxx", "giraffeName")}
        <div className="icons">
          <i className="fas fa-venus-mars" />
          <i className="fas fa-balance-scale" />
          <i className="fas fa-ruler-vertical" />
        </div>
        <div className="general centered">
          {RenderEditView(mode, "-")}
          {RenderEditView(mode, "-")}
          {RenderEditView(mode, "-")}
        </div>
        <div className="parameters">
          <p>
            <strong>Цвет:</strong>
            {RenderEditView(mode, "-")}
          </p>
          <n />
          <p>
            <strong>Диета:</strong>
            {RenderEditView(mode, "-")}
          </p>
          <n />
          <p>
            <strong>Характер:</strong>
            {RenderEditView(mode, "-")}
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

function RenderEditView(mode, data, className) {
  return (
    <>
      {mode === "view" ? (
        <span className={className}>{data}</span>
      ) : (
        <input type="text" value={data} />
      )}
    </>
  );
}
