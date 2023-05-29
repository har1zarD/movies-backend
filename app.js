const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const loginRoutes = require("./src/routes/login");
const registerRoutes = require("./src/routes/register");
const movieRoutes = require("./src/routes/movies");
const soonmovieRoutes = require("./src/routes/soonmovies");
const sendMailRouter = require("./src/routes/sendemail");
const mongooseConnection = require("./database");
require("dotenv").config();

const mongoUrl = "mongodb+srv://tarikvelic23:filmovi123@cluster0.6tnablz.mongodb.net/";
mongooseConnection.once("open", () => console.log("Connected to database"));

app.use(cors());
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

app.use("/register", registerRoutes);
app.use("/login", loginRoutes);
app.use("/movies", movieRoutes);
app.use("/soonmovies", soonmovieRoutes);
app.use("/sendemail", sendMailRouter);
app.listen(5000, () => {
  console.log("Server Started");
});

mongooseConnection.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});
