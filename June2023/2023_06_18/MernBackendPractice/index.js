const express = require("express");
const app = express();

let callback = function (req, res) {
//   console.log("Hello World");


};

let ufoneAdv = function () {
  console.log("ufone advertisement");
};
app.get("/browser/raza", ufoneAdv, callback);
app.get("/tumhitoho", ufoneAdv);

app.listen(3500, () => console.log("Server is very much listening"));
