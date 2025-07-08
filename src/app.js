// const express = require("express");

// const app = express();

// app.use("/user", (req, res) => {
//   res.send("Route Handler 1");
//   console.log("Sending route handler response");
// });

// app.listen(7777, () => {
//   console.log("Server sucessfully started!!");
// });

const express = require("express");
const app = express();

// Specific route first
app.use("/hello", (req, res) => {
  res.send("Hello hello hello");
});

// General route after
app.use("/", (req, res) => {
  res.send("Hello from Server");
});

app.listen(3000, () => {
  console.log("Server Successfully started on port number: 3000");
});

