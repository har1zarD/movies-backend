const mongoose = require("mongoose");
const db = "mongodb+srv://tarikvelic23:filmovi123@cluster0.6tnablz.mongodb.net/";

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

const connection = mongoose.connection;
module.exports = connection;
