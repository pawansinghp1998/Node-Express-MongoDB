// Express Js

const fs = require("fs");
const express = require("express");
const server = express();

const products = JSON.parse(fs.readFileSync("data.json", "utf-8"));

server.get("/", (req, res) => {
  res.send("Hello");
  //res.sendFile("/Users/pawansingh/homespace/Node+Express+MongoDB/index.html");
  //res.json(products);
});

server.listen("8080", () => {
  console.log("Server is listening at Port 8080");
});
