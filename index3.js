const fs = require("fs");
const http = require("http");

//can not send headers after they are sent to client  ---> most common errors like undefined in js
// it happens when server runs two time

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url.startsWith("/product")) {
    // server side rendering, use of node js
    //dynamically sending html and css
    const productId = req.url.split("/")[2];
    const products = JSON.parse(fs.readFileSync("data.json", "utf-8"));
    const prd = products.products.find((p) => p.id === +productId);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(prd));
    res.end();
    return;
  }
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end("Home Page");
      break;

    case "/api":
      res.setHeader("Content-Type", "text/html");
      res.end("Api Page");
      break;

    default:
      res.setHeader("Content-Type", "text/html");
      res.end("Page not Found");
  }
});

server.listen(3000);
