import React, { useState } from "react";
import "./style.scss";
import EditCard from "../EditCard";
import UploadImage from "../UploadImage";

const GiraffeCard = (props) => {
  const [mode, setMode] = useState("view");
  const [editBlock, showEditBlock] = useState(false);

  const giraffe = { ...props.giraffe };
  const onSetEdit = () => {
    setMode("edit");
    showEditBlock(false);
  };

  const onDotsClick = () => {
    showEditBlock(!editBlock);
  };

  const onInputChange = (event, key) => {
    giraffe[key] = event.target.value;
  };

  const onDelete = () => {
    props.onDeleteGiraffe(giraffe._id);
  };
  const onSave = () => {
    setMode("view");

    props.onSaveGiraffe(giraffe._id, giraffe);
  };
  const cardClassName = mode == "view" ? "giraffeCard" : "editCard";

  const imgUrl = `/image/${giraffe.photo}`;
  return (
    <div className={cardClassName}>
      <button className="editButton" onClick={onDotsClick}>
        <i className="fas fa-ellipsis-h" />
      </button>
      <div className="image centered">
        {giraffe.photo !== "" ? (
          <img src={imgUrl} alt={giraffe ? giraffe.name : "Имя"} />
        ) : null}

        {mode === "edit" ? <UploadImage /> : null}
      </div>
      <div className="info">
        {renderEditView(
          mode,
          giraffe.name,
          onInputChange,
          "name",
          "giraffeName"
        )}
        <div className="icons">
          <i className="fas fa-venus-mars" />
          <i className="fas fa-balance-scale" />
          <i className="fas fa-ruler-vertical" />
        </div>
        <div className="general centered">
          {renderEditView(mode, giraffe.gender, onInputChange, "gender")}
          {renderEditView(mode, giraffe.weight, onInputChange, "weight")}
          {renderEditView(mode, giraffe.height, onInputChange, "height")}
        </div>
        <div className="parameters">
          <p>
            <strong>Цвет:</strong>
            {renderEditView(mode, giraffe.color, onInputChange, "color")}
          </p>
          <p>
            <strong>Диета:</strong>
            {renderEditView(mode, giraffe.diet, onInputChange, "diet")}
          </p>
          <p>
            <strong>Характер:</strong>
            {renderEditView(
              mode,
              giraffe.character,
              onInputChange,
              "character"
            )}
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

function renderEditView(mode, data, onInputChange, key, className) {
  return (
    <>
      {mode === "view" ? (
        <span className={className}>{data}</span>
      ) : (
        <input
          className={className}
          type="text"
          onChange={onInputChange.bind(null, key)}
          value={data}
        />
      )}
    </>
  );
}
