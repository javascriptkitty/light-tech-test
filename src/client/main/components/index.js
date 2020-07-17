import React, { Suspense, useState } from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import { hot } from "react-hot-loader/root";
import UploadExample from "./uploadExample";
import "./style.scss";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Main />
      {/* <h1 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Let's start dev</h1>
            <UploadExample/> */}
    </div>
  );
}

export default hot(App);
