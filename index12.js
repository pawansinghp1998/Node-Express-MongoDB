//Making routes folder for handling different routes
const express = require("express");
const morgan = require("morgan");
const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

//body parser
server.use(express.json());
//middleware to attach router with server
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

server.listen("4000", () => {
  console.log("Server is listening at port 4000");
});
