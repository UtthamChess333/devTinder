const express = require("express");

const app = express();

app.use("/hello/2",(req, res) => {
  res.send("Hello from the hello page 2");
});

app.use("/hello",(req, res) => {
  res.send("Hello from the hello page");
});

app.use("/test",(req, res) => {
  res.send("Hello from the server");
});
 
// app.use("/",(req, res) => {
//   res.send("Hello from the home");
// });

app.listen(7777, () => {
  console.log("Server sucessfully started!!");
});
