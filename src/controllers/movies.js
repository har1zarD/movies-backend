const movieService = require("../services/movies");
const Movie = require("../models/movies"); // import modela

exports.addMovie = async (req, res) => {
  try {
    const { title, director, genre, showtimes, price, hall, type, releaseDate, image } = req.body;
    const movie = await movieService.addMovie(title, director, price, genre, showtimes, hall, type, releaseDate, image);
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updatePrice = async (req, res) => {
  try {
    const { id } = req.params;
    const { price } = req.body;
    const movie = await movieService.updatePrice(id, price);
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateShowtimes = async (req, res) => {
  try {
    const { id } = req.params;
    const { showtimes } = req.body;
    const movie = await movieService.updateShowtimes(id, showtimes);
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getMovieById = async (req, res) => {
  const movieId = req.params.id;
  try {
    const movie = await Movie.findById(movieId);
    res.json(movie);
  } catch (error) {
    res.status(404).json({ message: "Movie not found" });
  }
};

exports.getPrice = async (req, res) => {
  try {
    const { id } = req.params;
    const price = await movieService.getPrice(id);
    res.json({ price });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getShowtimes = async (req, res) => {
  try {
    const { id } = req.params;
    const showtimes = await movieService.getShowtimes(id);
    res.json({ showtimes });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTitleById = async (req, res) => {
  const movieId = req.params.id;
  try {
    const title = await movieService.getTitleById(movieId);
    if (!title) {
      return res.status(404).json({ error: `Movie with ID ${movieId} not found` });
    }
    res.json(title);
  } catch (error) {
    res.status(500).json({ error: `Error retrieving title for movie with ID ${movieId}: ${error.message}` });
  }
};

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await movieService.getAllMoviesFromDatabase();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllMoviesFromDatabase = async () => {
  const movies = await Movie.find();
  return movies;
};

exports.saveMovieName = async (req, res) => {
  const { movieId, movieName } = req.body;
  try {
    const movie = await movieService.saveMovieName(movieId, movieName);
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
