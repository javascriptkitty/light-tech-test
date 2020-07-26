import React from "react";
import GiraffeCard from "../GiraffeCard";
import "./style.scss";

export default function GiraffeContainer(props) {
  const sorted = [...props.giraffes].sort(function (a, b) {
    return new Date(b.created) - new Date(a.created);
  });

  const cards = sorted.map((giraffe, i) => (
    <GiraffeCard
      key={giraffe._id}
      giraffe={giraffe}
      onEditGiraffe={props.onEditGiraffe}
      onDeleteGiraffe={props.onDeleteGiraffe}
      onSaveGiraffe={props.onSaveGiraffe}
    />
  ));

  return <div className="giraffeContainer">{cards}</div>;
}
