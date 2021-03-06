import React from "react";

import "./style.scss";

export default function NavButton(props) {
  const { button } = props;
  return (
    <button className="navButton">
      <i className={button.icon}></i>
      <p>{button.title}</p>
    </button>
  );
}
