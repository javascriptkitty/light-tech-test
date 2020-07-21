import React, { useEffect } from "react";
import GiraffeContainer from "../GiraffeContainer";
import Menu from "../Menu";
import Capacity from "../Capacity";
import Updates from "../Updates";
import axios from "axios";
import "./style.scss";
import * as action from "../Redux/Actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  giraffes: state,
});

const mapDispatchToProps = (dispatch) => ({
  updateAction: (index, newValue) => dispatch(updateAction(index, newValue)),
  deleteAction: (index) => dispatch(deleteAction(index)),
  addAction: (giraffe) => dispatch(deleteAction(giraffe)),
});

let animals;
const Main = ({ updateAction, deleteAction, addAction }) => {
  const [giraffes, setGiraffes] = React.useState([]);

  useEffect(() => {
    if (!animals) {
      debugger;
      animals = axios.get("/api/giraffe");
      animals.then((res) => {
        setGiraffes(res.data);
      });
    }
  });
  return (
    <div className="main" data-control="wheel">
      <Menu />
      <div className="title">
        <h2>Жирафы</h2>
        <button className="addButton centered">
          <i className="fas fa-plus fa-lg"> </i>
        </button>
      </div>
      <GiraffeContainer giraffes={giraffes} />
      <Capacity />
      <Updates />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
