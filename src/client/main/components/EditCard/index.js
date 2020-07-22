import React from "react";
import "./style.scss";

export default function EditCard(props) {
  const handleClick = () => {
    props.setEdit();
  };
  const handleDelete = () => {
    props.delete();
  };
  return (
    <div className="editBlock">
      <button onClick={handleClick}>
        <i className="far fa-trash-alt"></i> <span>Редактировать</span>
      </button>
      <button onClick={handleDelete}>
        <i className="fas fa-pencil-alt"></i>
        <span>Удалить</span>
      </button>
    </div>
  );
}
