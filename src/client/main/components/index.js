import React, { Suspense, useState } from "react";
import NavBar from "./NavBar";
import GiraffeContainer from "./GiraffeContainer";
import { hot } from "react-hot-loader/root";
import UploadExample from "./uploadExample";
import "./style.css";

function App() {
  return (
    <div className="container">
      <NavBar />
      <GiraffeContainer />
      {/* <h1 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Let's start dev</h1>
            <UploadExample/> */}
    </div>
  );
}

export default hot(App);
