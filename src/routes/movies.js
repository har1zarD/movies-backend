const express = require("express");
const router = express.Router();

const moviesController = require("../controllers/movies");

router.get("/", moviesController.getAllMovies);
router.get("/:id", moviesController.getMovieById);
router.get("/:id/price", moviesController.getPrice);
router.get("/:id/showtimes", moviesController.getShowtimes);
router.get("/:id/title", moviesController.getTitleById);
router.post("/save-movie-name", moviesController.saveMovieName);

router.post("/", moviesController.addMovie);

router.put("/:id/price", moviesController.updatePrice);
router.put("/:id/showtimes", moviesController.updateShowtimes);

module.exports = router;
