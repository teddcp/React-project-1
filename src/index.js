import React from "react";
import ReactDOM from "react-dom";

import Mycomponent from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Mycomponent />
  </React.StrictMode>,
  rootElement
);
