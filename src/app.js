
const express = require("express");
const app = express();

app.get("/user/:userId/:password/:state/:city", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Patti", lastName: "Uttham Naresh" });
});

// app.post("/user", (req, res) => {
//   res.send("Data sucessfully saved to the database");
// });

// app.delete("/user", (req, res) => {
//   res.send("Deleted sucessfully!");
// });

// app.use("/test", (req, res) => {
//   res.send("Hello from the server");
// });

// app.use("/",(req,res)=>{
//   res.send("Hello from Home Page");
// })

app.listen(3000, () => {
  console.log("Server Successfully started on port number: 3000");
});
