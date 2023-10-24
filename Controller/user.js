//User Controller
const express = require("express");
const server = express();
const fs = require("fs");
const users = JSON.parse(fs.readFileSync("data.json", "utf-8"));

server.use(express.json());

exports.createUser = (req, res) => {
  //product is saved in array memory only once u restart server it will be lost
  users.users.push(req.body);
  res.json(req.body);
};

exports.getAllUser = (req, res) => {
  res.send(users.users);
};

exports.getUser = (req, res) => {
  const userId = +req.params.id;
  const prod = users.users.find((p) => p.id === userId);
  res.json(prod);
};

exports.replaceUser = (req, res) => {
  const id = +req.params.id;
  console.log(id);
  const userIndex = users.users?.findIndex((p) => p.id === id);
  console.log(userIndex);
  users.users.splice(userIndex, 1, { ...req.body, id: id });
  res.json({ id: id, success: true, msg: "Product updated successfully" });
};

exports.updateUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.users.findIndex((p) => p.id === id);
  const user = users.users[userIndex];
  users.users.splice(userIndex, 1, { ...user, ...req.body });
  res.json({ id: id, success: true, msg: "Product updated successfully" });
};

exports.deleteUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.users.findIndex((p) => p.id === id);
  users.users.splice(userIndex, 1);
  res.json({ id: id, success: true, msg: "Product deleted successfully" });
};
