const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  //Creating a new instance of the user model
  const user = new User({
    firstName: "Akshay",
    lastName: "Saini",
    emailId: "akshaysaini@gmail.com",
    password: "akshay!123",
  });
  try {
    await user.save;
    res.send("User Added sucesussfully");
  } catch (err) {
    res.status(400).send("Error saving the user: " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database sucessfully established");
    app.listen(3000, () => {
      console.log("Server Successfully started on port number: 3000");
    });
  })
  .catch(() => {
    console.error("Database cannot be connected!!!");
  });
