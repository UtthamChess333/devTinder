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

app.use("/user", (req, res) => {
  res.send("HAHHAHHAHHAHHAHAHHAHA");
});

app.get("/user", (req, res) => {
  res.send({ firstName: "Patti", lastName: "Uttham Naresh" });
});

app.post("/user", (req, res) => {
  // Saving data to DB
  res.send("Data sucessfully saved to the database");
});

app.delete("/user", (req, res) => {
  res.send("Deleted sucessfully!");
});

app.use("/test", (req, res) => {
  res.send("Hello from the server");
});

app.listen(3000, () => {
  console.log("Server Successfully started on port number: 3000");
});
