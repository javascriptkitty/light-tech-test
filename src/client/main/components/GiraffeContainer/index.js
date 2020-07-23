import React from "react";
import GiraffeCard from "../GiraffeCard";
import "./style.scss";

export default function GiraffeContainer(props) {
  const arr = props.giraffes.sort(function (a, b) {
    return new Date(a.created) - new Date(b.created);
  });
  const cards = arr.map((giraffe, i) => (
    <GiraffeCard
      key={i}
      giraffe={giraffe}
      onEditGiraffe={props.onEditGiraffe}
      onDeleteGiraffe={props.onDeleteGiraffe}
      onSaveGiraffe={props.onSaveGiraffe}
    />
  ));

  return <div className="giraffeContainer">{cards}</div>;
}
