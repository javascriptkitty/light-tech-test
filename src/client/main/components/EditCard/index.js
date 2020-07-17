import React from "react";
import "./style.scss";

export default function EditCard() {
  return (
    <div className="editBlock">
      <button>
        <i className="far fa-trash-alt"></i> <span>Редактировать</span>
      </button>
      <button>
        <i className="fas fa-pencil-alt"></i>
        <span>Удалить</span>
      </button>
    </div>
  );
}
