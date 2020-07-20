import React, { useEffect } from "react";
import GiraffeContainer from "../GiraffeContainer";
import Menu from "../Menu";
import Capacity from "../Capacity";
import Updates from "../Updates";
import axios from "axios";
import "./style.scss";

let animals;
export default function Main() {
  const [giraffes, setGiraffes] = React.useState([]);

  useEffect(() => {
    if (!animals) {
      animals = axios.get("/api/giraffe");
      animals.then((res) => {
        setGiraffes(res.data);
      });
    }
  });
  return (
    <div className="main">
      <Menu />
      <div className="title">
        <h2>Жирафы</h2>
        <button className="addButton centered">
          <i className="fas fa-plus fa-lg"> </i>
        </button>
      </div>
      <GiraffeContainer />
      <Capacity />
      <Updates />
    </div>
  );
}
