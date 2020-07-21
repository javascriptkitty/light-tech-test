import React from "react";
import GiraffeCard from "../GiraffeCard";
import "./style.scss";

export default function GiraffeContainer(props) {
  const { giraffes } = props;
  return (
    <div className="giraffeContainer">
      {giraffes.map((el) => {
        return <GiraffeCard key={el._id} giraffe={el} />;
      })}
    </div>
  );
}
