// optimizing the code(better handling)

const express = require("express");
const server = express();
const fs = require("fs");
const products = JSON.parse(fs.readFileSync("data.json", "utf-8"));

server.use(express.json());

const createProduct = (req, res) => {
  //product is saved in array memory only once u restart server it will be lost
  products.products.push(req.body);
  res.json(req.body);
};

const getAllProducts = (req, res) => {
  res.send(products);
};

const getProduct = (req, res) => {
  const productId = +req.params.id;
  const prod = products.products.find((p) => p.id === productId);
  res.json(prod);
};

const replaceProduct = (req, res) => {
  const id = +req.params.id;
  console.log(id);
  const productIndex = products.products?.findIndex((p) => p.id === id);
  console.log(productIndex);
  products.products.splice(productIndex, 1, { ...req.body, id: id });
  res.json({ id: id, success: true, msg: "Product updated successfully" });
};

const updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.products.findIndex((p) => p.id === id);
  const product = products.products[productIndex];
  products.products.splice(productIndex, 1, { ...product, ...req.body });
  res.json({ id: id, success: true, msg: "Product updated successfully" });
};

const deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.products.findIndex((p) => p.id === id);
  products.products.splice(productIndex, 1);
  res.json({ id: id, success: true, msg: "Product deleted successfully" });
};

//POST --> create product
server.post("/products", createProduct);

//Api root/base url
//GET --> read
server.get("/products", getAllProducts);

server.get("/products/:id", getProduct);

//update  --> PUT
server.put("/products/:id", replaceProduct);

//differece between PUT and PATCH is in PUT we generally override the data , but in PATCH
//only respective property gets updated rest remains same

//update --> PATCH
server.patch("/products/:id", updateProduct);

//DELETE --> delete
server.delete("/products/:id", deleteProduct);

server.listen("8080", () => {
  console.log("Server is listening at port 8080");
});
