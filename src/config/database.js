const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://utthamchess:NOD2EP5XirIHojXS@namastenode.jvmtw.mongodb.net/devTinder"
  );
};

module.exports = {
  connectDB,
};
