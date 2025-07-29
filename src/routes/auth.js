const express = require("express");
const authRouter = express.Router();
const { validationSignUpData } = require("../Utils/validation");
const User = require("../models/user");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");


authRouter.use(express.json());

authRouter.post("/signup", async (req, res) => {
  try {
    //Validation of Data
    validationSignUpData(req);

    const { firstName, lastname, emailId, password } = req.body;

    //Encrypt the password
    const passwordHash = await bcrypt.hash(password, 10);
    //Creating a new instance of the user model
    const user = new User({
      firstName,
      lastname,
      emailId,
      password: passwordHash,
    });

    await user.save();
    res.send("User Added sucesussfully");
  } catch (err) {
    res.status(400).send("Error saving the user: " + err.message);
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId, emailId });
    if (!user) {
      throw new Error("Invalid Credentials");
    }
    const isPasswordValid = await user.validatePassword(password);

    if (isPasswordValid) {
      const token = await user.getJWT();

      res.cookie("token", token);
      res.send("Login Sucessfull");
    } else {
      res.send("Invalid Credentials");
    }
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

module.exports = authRouter;
