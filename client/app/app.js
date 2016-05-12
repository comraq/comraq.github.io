/*
 * Note: IIFE not required due to browserify auto scoping to
 *        preventing global pollution
 */
import React from "react";
import ReactDOM from "react-dom";

import Layout from "./components/Layout";

// Rest of the app's scripts goes here
const myStr = "a sample string";
const app = document.getElementById("app");

const dataFile = "app/data.json";
const headers = {
  "Content-type": "application/json"
};

const ajax = (method, path, headers) =>
  new Promise((resolve, reject) => {
    method = method || "GET";
    path = path || "/";

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == 4) {
        if (xmlhttp.status == 200)
          resolve(xmlhttp.responseText);
        else
          reject(xmlhttp.status);
      }
    }

    xmlhttp.open(method, path);
    for(let key in headers)
      xmlhttp.setRequestHeader(key, headers[key]);

    xmlhttp.send();
  })

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


