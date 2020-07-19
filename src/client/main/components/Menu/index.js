import React, { useState, useEffect } from "react";
import logo from "../../../../../public/image/logo.png";
import "./style.scss";

export default function Menu() {
  return (
    <div className="menu">
      <Tabs />
      <div className="logo">
        <i className="far fa-bell"> </i>
        <img src={logo}></img>
        <span>hello@giraffe.com</span>
      </div>
    </div>
  );
}

function Tabs() {
  let [count, setCount] = useState(3);

  function incrementCount() {
    //   props.onTabsAdd();
    count += 1;
    setCount(count);
  }

  //   useEffect(() => {
  //     setCount(props.parameters.length);
  //     renderTabs(props.parameters.length);
  //   });

  function renderTabs(count) {
    const groups = [];
    for (let i = 1; i <= count; i++) {
      groups.push(
        <span className="tab" key={i} index={i}>
          Вольер {i}
        </span>
      );
    }
    return groups;
  }

  return (
    <div className="tabs">
      {renderTabs(count)}
      <button className="addButton centered" onClick={incrementCount}>
        <i className="fas fa-plus fa-lg"> </i>
      </button>
    </div>
  );
}
