const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const User = require("./models/user");

// app.use((req, res) => {
//   res.send("Hi!!!!");
// });

app.use(express.json());

app.post("/signup", async (req, res) => {
  //Creating a new instance of the user model
  const user = new User(req.body);
  try {
    await user.save();
    res.send("User Added sucesussfully");
  } catch (err) {
    res.status(400).send("Error saving the user: " + err.message);
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("User deleted sucefully");
  } catch (err) {
    res.status(400).send("User Deleted Sucessfully");
  }
});

app.patch("/user", async (req, res) => {
  const user = req.body.userId;
  const data = req.body;
  try {
    await User.findByIdAndUpdate({ _id: user }, data, {
      returnDocument: "after",
      runValidators: true,
    });
    res.send("User updates sucessfully");
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

//Get user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const user = await User.findOne({ emailId: userEmail });
    if (!user) {
      res.send("User not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});

connectDB()
  .then(() => {
    console.log("Database sucessfully established");
    app.listen(7777, () => {
      console.log("Server Successfully started on port number: 7777");
    });
  })
  .catch(() => {
    console.error("Database cannot be connected!!!");
  });
