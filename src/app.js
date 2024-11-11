const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send({
    firstName: "Uttham",
    lastName: "Naresh",
  });
});

app.delete("/user", (req, res) => {
  res.send("Deleted Sucessfully");
});

app.post("/user", (req, res) => {
  console.log("Saving data to database");
  res.send("Data Sucessfully saved in the database");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(7777, () => {
  console.log("Server sucessfully started!!");
});
