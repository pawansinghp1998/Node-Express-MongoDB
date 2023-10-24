//Router

const productController = require("./Controller/product");
//here productController is module

const express = require("express");
const server = express();
const productRouter = express.Router();

server.use(express.json());
//middleware to attach router with server
server.use("/api/v1", productRouter);

//POST --> create product
productRouter.post("/products", productController.createProduct);

//Api root/base url
//GET --> read
productRouter.get("/products", productController.getAllProducts);

productRouter.get("/products/:id", productController.getProduct);

//update  --> PUT
productRouter.put("/products/:id", productController.replaceProduct);

//differece between PUT and PATCH is in PUT we generally override the data , but in PATCH
//only respective property gets updated rest remains same

//update --> PATCH
productRouter.patch("/products/:id", productController.updateProduct);

//DELETE --> delete
productRouter.delete("/products/:id", productController.deleteProduct);

server.listen("8080", () => {
  console.log("Server is listening at port 8080");
});
