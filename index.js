// HTTP Request
// Request Line  --->  GET, POST, PUT, DELETE, PATCH
// Headers --->  User Agent, accept-content, accept-language, cookie
// body  --->  username, password

//HTTP response
// status line -->  200,ok
// Headers  --> server:express, content-type:text/html, content-length:1000, expires: Tue, 27 april 2024
// Body   -->  <html><head>...</head>

//favicon.ico --> this request happens to show url tab icon

const data = { age: 25 };

const http = require("http");
const server = http.createServer((req, res) => {
  console.log("server started");
  //   res.setHeader("Dummy", "Dummy Value");
  //   res.end("<h1>Hello World</h1>");

  res.setHeader("Content_type", "application/json");
  res.end(JSON.stringify(data));

  console.log(req.url);
});

server.listen(3000);
