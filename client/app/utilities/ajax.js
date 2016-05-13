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
    let method = req.method || "GET";
    let path = req.path || "/";
    let body = req.body || {};

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
    for(let key in req.header)
      xmlhttp.setRequestHeader(key, req.header[key]);

    xmlhttp.send(body);
  })

export default ajax;

