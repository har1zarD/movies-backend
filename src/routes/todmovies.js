const express = require("express");
const router = express.Router();

const todmoviesController = require("../controllers/todmovies");

router.get("/", todmoviesController.getAllTodMovies);
router.get("/:id", todmoviesController.getTodMovieById);
router.get("/:id/price", todmoviesController.getPrice);
router.get("/:id/showtimes", todmoviesController.getShowtimes);
router.get("/:id/title", todmoviesController.getTitleById);

router.post("/", todmoviesController.addTodMovie);

router.put("/:id/price", todmoviesController.updatePrice);
router.put("/:id/showtimes", todmoviesController.updateShowtimes);

module.exports = router;
