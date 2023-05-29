const SoonMovie = require("../models/soonmovies");

exports.addSoonMovie = async (title, director, price, genre, showtimes, hall, type, releaseDate, image) => {
  const soonmovie = new SoonMovie({ title, director, genre, price, showtimes, hall, type, releaseDate, image });
  return await soonmovie.save();
};

exports.updatePrice = async (id, price) => {
  const soonmovie = await SoonMovie.findByIdAndUpdate(id, { price }, { new: true });
  return soonmovie;
};

exports.updateShowtimes = async (id, showtimes) => {
  const soonmovie = await SoonMovie.findByIdAndUpdate(id, { showtimes }, { new: true });
  return soonmovie;
};

exports.getSoonMovieById = async (id) => {
  const soonmovie = await SoonMovie.findById(id);
  if (!soonmovie) {
    throw new Error("SoonMovie not found");
  }
  return soonmovie;
};

exports.getPrice = async (id) => {
  const soonmovie = await SoonMovie.findById(id);
  if (!soonmovie) {
    throw new Error("SoonMovie not found");
  }
  return soonmovie.price;
};

exports.getShowtimes = async (id) => {
  const soonmovie = await SoonMovie.findById(id);
  if (!soonmovie) {
    throw new Error("SoonMovie not found");
  }
  return soonmovie.showtimes;
};

exports.getTitleById = async (id) => {
  const soonmovie = await SoonMovie.findById(id);
  return soonmovie ? soonmovie.title : null;
};

exports.getAllSoonMoviesFromDatabase = async () => {
  const soonmovies = await SoonMovie.find();
  return soonmovies;
};
