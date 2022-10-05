import React from "react";
import Store from "store";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
// import App from "layouts/App";
import App from 'layouts/App';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Store>
    <Router>
      <App />
    </Router>
  </Store>
);
