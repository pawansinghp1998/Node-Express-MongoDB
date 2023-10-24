// MVC  --> Model View controller
//model --> model is basically business logic/data
//view --> how data will be shownn on UI
// controller -->  logic part

const productController = require("./Controller/product");
//here productController is module

const express = require("express");
const server = express();

server.use(express.json());

//POST --> create product
server.post("/products", productController.createProduct);

//Api root/base url
//GET --> read
server.get("/products", productController.getAllProducts);

server.get("/products/:id", productController.getProduct);

//update  --> PUT
server.put("/products/:id", productController.replaceProduct);

//differece between PUT and PATCH is in PUT we generally override the data , but in PATCH
//only respective property gets updated rest remains same

//update --> PATCH
server.patch("/products/:id", productController.updateProduct);

//DELETE --> delete
server.delete("/products/:id", productController.deleteProduct);

server.listen("8080", () => {
  console.log("Server is listening at port 8080");
});
