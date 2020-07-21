import React, { useState } from "react";
import "./style.scss";
import EditCard from "../EditCard";
import UploadImage from "../UploadImage";
import axios from "axios";

const GiraffeCard = (props) => {
  const [mode, setMode] = useState("edit");
  const [editBlock, showEditBlock] = useState(false);

  const { giraffe } = props;
  const onSetEdit = () => {
    setMode("edit");
    showEditBlock(false);
  };
  const onDelete = () => {};
  const onDotsClick = () => {
    showEditBlock(!editBlock);
  };

  const onSave = () => {
    setMode("view");
    // debugger;
    // axios.post("/api/giraffe", obj).then((res) => {
    //   console.log(res.data);
    // });
  };
  const cardClassName = mode == "view" ? "giraffeCard" : "editCard";

  const imgUrl = `/image/${giraffe.photo}`;
  return (
    <div className={cardClassName}>
      <button className="editButton" onClick={onDotsClick}>
        <i className="fas fa-ellipsis-h" />
      </button>
      <div className="image centered">
        <img src={imgUrl} alt={giraffe.name} />

        {mode === "edit" ? <UploadImage img={imgUrl} /> : null}
      </div>
      <div className="info">
        {RenderEditView(mode, giraffe.name, "giraffeName")}
        <div className="icons">
          <i className="fas fa-venus-mars" />
          <i className="fas fa-balance-scale" />
          <i className="fas fa-ruler-vertical" />
        </div>
        <div className="general centered">
          {RenderEditView(mode, giraffe.gender)}
          {RenderEditView(mode, giraffe.weight)}
          {RenderEditView(mode, giraffe.height)}
        </div>
        <div className="parameters">
          <p>
            <strong>Цвет:</strong>
            {RenderEditView(mode, giraffe.color)}
          </p>
          <p>
            <strong>Диета:</strong>
            {RenderEditView(mode, giraffe.diet)}
          </p>
          <p>
            <strong>Характер:</strong>
            {RenderEditView(mode, giraffe.character)}
          </p>
        </div>
      </div>
      {mode === "edit" ? (
        <button className="saveButton centered" onClick={onSave}>
          Сохранить
        </button>
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
        <input className={className} type="text" value={data} />
      )}
    </>
  );
}
