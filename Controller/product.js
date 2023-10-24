//Product Controller
const express = require("express");
const server = express();
const fs = require("fs");
const products = JSON.parse(fs.readFileSync("data.json", "utf-8"));

server.use(express.json());

exports.createProduct = (req, res) => {
  //product is saved in array memory only once u restart server it will be lost
  products.products.push(req.body);
  res.json(req.body);
};

exports.getAllProducts = (req, res) => {
  res.send(products.products);
};

exports.getProduct = (req, res) => {
  const productId = +req.params.id;
  const prod = products.products.find((p) => p.id === productId);
  res.json(prod);
};

exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  console.log(id);
  const productIndex = products.products?.findIndex((p) => p.id === id);
  console.log(productIndex);
  products.products.splice(productIndex, 1, { ...req.body, id: id });
  res.json({ id: id, success: true, msg: "Product updated successfully" });
};

exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.products.findIndex((p) => p.id === id);
  const product = products.products[productIndex];
  products.products.splice(productIndex, 1, { ...product, ...req.body });
  res.json({ id: id, success: true, msg: "Product updated successfully" });
};

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.products.findIndex((p) => p.id === id);
  products.products.splice(productIndex, 1);
  res.json({ id: id, success: true, msg: "Product deleted successfully" });
};
