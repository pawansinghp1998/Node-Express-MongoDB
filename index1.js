const fs = require("fs");
const http = require("http");

const htmlData = fs.readFileSync("index.html", "utf-8");

//one of the backend task is static hosting

const server = http.createServer((req, res) => {
  //sending static file
  res.end(htmlData);
});

server.listen(3000);
