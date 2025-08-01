const express = require("express");
const profileRouter = express.Router();
const { userAuth } = require("../middlewares/auth");
const { validationSignUpData, validateEditProfileData} = require("../Utils/validation");

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    const user = req.user;
    res.send(user);
  } catch (err) {
    res.status(401).send("ERROR : " + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res) => {
  try {
    if(!validateEditProfileData(req)) {
      throw new Error("Invalid Edit Request");
    } 
    const loggedInUser = req.user;
    console.log(loggedInUser);
    Object.keys(req.body).forEach((key)=>(loggedInUser[key] = req.body[key]));
    await loggedInUser.save();
    console.log(loggedInUser);
    res.json({message: `${loggedInUser.firstName}, your profile was updated sucessfully!!`,data: loggedInUser});
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
});

module.exports = profileRouter;

