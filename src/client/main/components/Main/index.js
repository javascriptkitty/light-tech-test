import React, { useEffect } from "react";
import GiraffeContainer from "../GiraffeContainer";
import Menu from "../Menu";
import Capacity from "../Capacity";
import Updates from "../Updates";
import axios from "axios";
import "./style.scss";
import {
  updateAction,
  addAction,
  deleteAction,
  fetchAction,
} from "../Redux/Actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    giraffes: state.giraffes,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateAction: (index, newValue) => dispatch(updateAction(index, newValue)),
  deleteAction: (index) => dispatch(deleteAction(index)),
  addAction: (giraffe) => dispatch(addAction(giraffe)),
  fetchAction: () => dispatch(fetchAction()),
});

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  onAddGiraffe = () => {
    this.props.addAction({
      name: "Имя",
      gender: "-",
      weight: "-",
      height: "-",
      color: "",
      diet: "",
      character: "",
      photo: "",
    });
  };

  onSaveGiraffe = (id, value) => {
    debugger;
    this.props.updateAction(id, value);
  };
  onDeleteGiraffe = (id) => {
    debugger;
    this.props.deleteAction(id);
  };

  componentDidMount() {
    this.props.fetchAction();
  }

  render() {
    return (
      <div className="main" data-control="wheel">
        <Menu />
        <div className="title">
          <h2>Жирафы</h2>
          <button className="addButton centered" onClick={this.onAddGiraffe}>
            <i className="fas fa-plus fa-lg"> </i>
          </button>
        </div>
        <GiraffeContainer
          giraffes={this.props.giraffes}
          onEditGiraffe={this.onEditGiraffe}
          onDeleteGiraffe={this.onDeleteGiraffe}
          onSaveGiraffe={this.onSaveGiraffe}
        />
        <Capacity />
        <Updates />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
