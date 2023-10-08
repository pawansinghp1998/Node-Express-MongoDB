const express = require("express");

//morgan is a third party middleware
const morgan = require("morgan");
const server = express();

//using third party middleware
server.use(morgan("dev"));
server.use(morgan("default"));

//logger using middleware
//Application level middleware
server.use((req, res, next) => {
  console.log(req.method, "  ", req.ip, "  ", req.hostname, "  ", new Date());
  next();
});

//built in middleware
//body parser
server.use(express.json());
server.use(express.urlencoded());

//static hoisting middleware
server.use(express.static("public"));

//req.query
//req.body
//req.params
const auth = (req, res, next) => {
  if (req.query.password) {
    next();
  } else {
    res.sendStatus(401);
  }
};

const auth2 = (req, res, next) => {
  if (req.body.password) {
    next();
  } else {
    res.sendStatus(401);
  }
};

server.get("/product/:id", (req, res) => {
  res.send(req.params);
});

//Route level middleware
server.get("/", auth, (req, res) => {
  res.send("auth");
});
server.post("/", auth2, (req, res) => {
  res.send("auth");
});

server.listen("8080", () => {
  console.log("Server is listening at port 8080");
});
