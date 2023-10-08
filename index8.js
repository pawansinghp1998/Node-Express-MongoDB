// REST APi
//POST --> create
//GET  --> read
//PUT  --> update
//DELETE  --> delete

const express = require("express");
const server = express();
const fs = require("fs");
const products = JSON.parse(fs.readFileSync("data.json", "utf-8"));

server.use(express.json());

server.post("/products", (req, res) => {
  //product is saved in array memory only once u restart server it will be lost
  products.products.push(req.body);
  res.json(req.body);
});

//Api root/base url
//GET --> read
server.get("/products", (req, res) => {
  res.send(products);
});

server.get("/products/:id", (req, res) => {
  const productId = +req.params.id;
  const prod = products.products.find((p) => p.id === productId);
  res.json(prod);
});

//update  --> PUT
server.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  console.log(id);
  const productIndex = products.products?.findIndex((p) => p.id === id);
  console.log(productIndex);
  products.products.splice(productIndex, 1, { ...req.body, id: id });
  res.json({ id: id, success: true, msg: "Product updated successfully" });
});

//differece between PUT and PATCH is in PUT we generally override the data , but in PATCH
//only respective property gets updated rest remains same

//update --> PATCH
server.patch("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.products.findIndex((p) => p.id === id);
  const product = products.products[productIndex];
  products.products.splice(productIndex, 1, { ...product, ...req.body });
  res.json({ id: id, success: true, msg: "Product updated successfully" });
});

//DELETE --> delete
server.delete("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.products.findIndex((p) => p.id === id);
  products.products.splice(productIndex, 1);
  res.json({ id: id, success: true, msg: "Product deleted successfully" });
});

server.listen("8080", () => {
  console.log("Server is listening at port 8080");
});
