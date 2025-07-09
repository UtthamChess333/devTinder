const express = require("express");
const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

app.use("/admin", adminAuth);

app.use("/user", userAuth, (req, res, next) => {
  res.send("This is the User Auth");
});

app.get("/admin/getAllData", (req, res, next) => {
  res.send("All Data Sent...");
});

app.get("/admin/deleteUser", (req, res, next) => {
  res.send("User Data Deleted...");
});

app.listen(3000, () => {
  console.log("Server Successfully started on port number: 3000");
});
