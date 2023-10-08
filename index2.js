const fs = require("fs");
const http = require("http");

const jsonData = fs.readFileSync("data.json", "utf-8");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(jsonData);
});

server.listen(3000);
