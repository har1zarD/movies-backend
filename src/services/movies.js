const Movie = require("../models/movies");

exports.addMovie = async (title, director, price, genre, showtimes, hall, type, releaseDate, image) => {
  const movie = new Movie({ title, director, genre, price, showtimes, hall, type, releaseDate, image });
  return await movie.save();
};

exports.updatePrice = async (id, price) => {
  const movie = await Movie.findByIdAndUpdate(id, { price }, { new: true });
  return movie;
};

exports.updateShowtimes = async (id, showtimes) => {
  const movie = await Movie.findByIdAndUpdate(id, { showtimes }, { new: true });
  return movie;
};

exports.getMovieById = async (id) => {
  const movie = await Movie.findById(id);
  if (!movie) {
    throw new Error("Movie not found");
  }
  return movie;
};

exports.getPrice = async (id) => {
  const movie = await Movie.findById(id);
  if (!movie) {
    throw new Error("Movie not found");
  }
  return movie.price;
};

exports.getShowtimes = async (id) => {
  const movie = await Movie.findById(id);
  if (!movie) {
    throw new Error("Movie not found");
  }
  return movie.showtimes;
};

exports.getTitleById = async (id) => {
  const movie = await Movie.findById(id);
  return movie ? movie.title : null;
};

exports.getAllMoviesFromDatabase = async () => {
  const movies = await Movie.find();
  return movies;
};

exports.saveMovieName = async (movieId, movieName) => {
  const movie = await Movie.findByIdAndUpdate(movieId, { name: movieName }, { new: true });
  return movie;
};
