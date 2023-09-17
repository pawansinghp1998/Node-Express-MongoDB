const lib = require("./lib.js");

//import { sum } from "./lib.js";

const fs = require("fs");

const t1 = performance.now();

//read file synchronously
const txt = fs.readFileSync("demo.txt", "utf-8");

//read file asynchronously
// fs.readFile("demo.txt", "utf-8", (err, txt) => {
//   console.log(txt);
// });

const t2 = performance.now();
//console.log("Hello");
//console.log(sum(2, 3), lib.diff(5, 3));

//console.log(txt);
console.log(t2 - t1);
