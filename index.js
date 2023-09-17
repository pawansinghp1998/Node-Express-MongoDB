const express = require("express");
const server = express();

//nodemon to run server automatically if any changes occurs
// "express": "^4.18.2"  --> ^ allow for changes at .18 level
// "express": "~4.18.2"  --> ^ allow for changes at .2 level
// "express": "4.18.2"  --> no update only to use exact sam,e version
// npm outdated --> to check outdated packages
// npm update  --> to update outdated packages

server.listen(3000);
