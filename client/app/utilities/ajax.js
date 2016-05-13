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

export default ajax;

