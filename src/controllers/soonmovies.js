const soonmovieService = require("../services/soonmovies");
const SoonMovie = require("../models/soonmovies"); // import modela

exports.addSoonMovie = async (req, res) => {
  try {
    const { title, director, genre, showtimes, price, hall, type, releaseDate, image } = req.body;
    const soonmovie = await soonmovieService.addSoonMovie(
      title,
      director,
      price,
      genre,
      showtimes,
      hall,
      type,
      releaseDate,
      image
    );
    res.status(201).json(soonmovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePrice = async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;
    const soonmovie = await soonmovieService.updatePrice(id, price);
    res.json(soonmovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateShowtimes = async (req, res) => {
  try {
    const { id } = req.params;
    const { showtimes } = req.body;
    const soonmovie = await soonmovieService.updateShowtimes(id, showtimes);
    res.json(soonmovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSoonMovieById = async (req, res) => {
  const soonmovieId = req.params.id;
  try {
    const soonmovie = await SoonMovie.findById(soonmovieId);
    res.json(soonmovie);
  } catch (error) {
    res.status(404).json({ message: "SoonMovie not found" });
  }
};

exports.getPrice = async (req, res) => {
  try {
    const { id } = req.params;
    const price = await soonmovieService.getPrice(id);
    res.json({ price });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getShowtimes = async (req, res) => {
  try {
    const { id } = req.params;
    const showtimes = await soonmovieService.getShowtimes(id);
    res.json({ showtimes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTitleById = async (req, res) => {
  const soonmovieId = req.params.id;
  try {
    const title = await soonmovieService.getTitleById(soonmovieId);
    if (!title) {
      return res.status(404).json({ error: `SoonMovie with ID ${soonmovieId} not found` });
    }
    res.json(title);
  } catch (error) {
    res.status(500).json({ error: `Error retrieving title for soonmovie with ID ${soonmovieId}: ${error.message}` });
  }
};

exports.getAllSoonMovies = async (req, res) => {
  try {
    const soonmovies = await soonmovieService.getAllSoonMoviesFromDatabase();
    res.json(soonmovies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllSoonMoviesFromDatabase = async () => {
  const soonmovies = await SoonMovie.find();
  return soonmovies;
};
