const fs = require("fs");
const express = require("express");
const server = express();

//API - ENDPOINT - ROUTE
server.get("/", (req, res) => {
  res.json({ type: "GET" });
});

server.post("/", (req, res) => {
  res.json({ type: "POST" });
});

server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});

server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

server.listen("8080", () => {
  console.log("Server is listening at Port 8080");
});
