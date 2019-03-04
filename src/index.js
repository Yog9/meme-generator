import React from "react";
import ReactDOM from "react-dom";
import "./normalize.css";
import "./index.css";
import Header from "./Header";
import axios from "axios";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Header />, document.getElementById("root"));

serviceWorker.unregister();
