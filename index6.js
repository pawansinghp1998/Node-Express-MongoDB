const express = require("express");
const server = express();

//Sequence matters
server.get("/", (req, res) => {
  res.send("Hello World");
});

server.get("/", (req, res) => {
  res.send("Hi Pawan Singh");
});

server.listen("8080", () => {
  console.log("Server is listening at port 8080");
});
