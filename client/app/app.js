import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute } from "react-router";

import ajax from "./utilities/ajax";
import Layout from "./components/Layout";

// Rest of the app's scripts goes here
const myStr = "a sample string";
const app = document.getElementById("app");

const dataFile = "app/data.json";
const headers = {
  "Content-type": "application/json"
};

ajax("GET", dataFile, headers)
  .then(results => {
    results = JSON.parse(results);
    console.log(results)

    // Set page title
    document.getElementsByTagName("title")[0].innerHTML = results.title;

    let { navbar } = results;
    ReactDOM.render(
      <Layout data={ myStr } navbar={ navbar }/>,
      app);

  })
  .catch(alert);
