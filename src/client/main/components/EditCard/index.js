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
        <i className="far fa-pencil-alt"></i> <span>Редактировать</span>
      </button>
      <button onClick={handleDelete}>
        <i className="fas fa-trash-alt"></i>
        <span>Удалить</span>
      </button>
    </div>
  );
}
