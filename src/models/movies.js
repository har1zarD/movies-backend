const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  genre: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  price: { type: [String] },
  showtimes: { type: [String], default: [] },
  image: { type: String },
  hall: { type: [String], default: [] },
  type: { type: [String], default: [] },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
