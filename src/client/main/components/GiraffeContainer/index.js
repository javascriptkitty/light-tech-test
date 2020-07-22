import React from "react";
import GiraffeCard from "../GiraffeCard";
import "./style.scss";

export default function GiraffeContainer(props) {
  const cards = props.giraffes.map((giraffe, i) => (
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
