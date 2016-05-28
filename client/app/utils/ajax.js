/*
 * Takes in a request object and returns a promise.
 * Request Object comes in the following form:
 * {
 *   path: String,
 *   method: String,
 *   header: Object,
 *   body: Object
 * }
 */
const ajax = req =>
  new Promise((resolve, reject) => {
    const method = req.method || "GET";
    const path = req.path || "/";
    const body = req.body || {};
    const headers = req.headers || {};

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = () => {
      if (xmlhttp.readyState == 4) {
        const res = {
          headers: xmlhttp.getAllResponseHeaders(),
          data: JSON.parse(xmlhttp.responseText)
        };
        if (xmlhttp.status == 200)
          resolve(JSON.stringify(res));
        else
          reject(JSON.stringify(res));
      }
    }

    let defaultHeaders = {
      "Content-Type": "application/json"
    };
    xmlhttp.open(method, path);

    for(let key in defaultHeaders)
      xmlhttp.setRequestHeader(key, defaultHeaders[key]);

    if (headers) {
      for(let key in headers)
        xmlhttp.setRequestHeader(key, headers[key]);
    }

    xmlhttp.send();
  })

export default ajax;
