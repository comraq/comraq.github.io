import React from "react";
import ReactDOM from "react-dom";

import ajax from "./utils/ajax";
import Layout from "./components/Layout";

// Rest of the app's scripts goes here
const myStr = "a sample string";
const app = document.getElementById("app");

const dataFile = "app/data.json";
const headers = {
  "Content-type": "application/json"
};

ajax({
  method: "GET",
  path: dataFile,
  header: headers
}).then(results => {
  const { data } = JSON.parse(results);

  // Set page title
  document.getElementsByTagName("title")[0].innerHTML = data.title;

  const { navbar } = data;
  ReactDOM.render(
    <Layout data={ myStr } navbar={ navbar }/>,
    app);

}).catch(alert);
