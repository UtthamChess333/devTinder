const express = require("express");
const { connectDB } = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth");
const requestRouter = require("./routes/request");
const profileRouter = require("./routes/profile");

app.use("/",authRouter);
app.use("/",requestRouter);
app.use("/",profileRouter);

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
