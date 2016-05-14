import React from "react";
import ReactDOM from "react-dom";

import ajax from "./utilities/ajax";
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
  results = JSON.parse(results);

  // Set page title
  document.getElementsByTagName("title")[0].innerHTML = results.title;

  let { navbar } = results;
  ReactDOM.render(
    <Layout data={ myStr } navbar={ navbar }/>,
    app);

}).catch(alert);
