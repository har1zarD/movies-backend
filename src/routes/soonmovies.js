const express = require("express");
const router = express.Router();

const soonmoviesController = require("../controllers/soonmovies");

router.get("/", soonmoviesController.getAllSoonMovies);
router.get("/:id", soonmoviesController.getSoonMovieById);
router.get("/:id/price", soonmoviesController.getPrice);
router.get("/:id/showtimes", soonmoviesController.getShowtimes);
router.get("/:id/title", soonmoviesController.getTitleById);

router.post("/", soonmoviesController.addSoonMovie);

router.put("/:id/price", soonmoviesController.updatePrice);
router.put("/:id/showtimes", soonmoviesController.updateShowtimes);

module.exports = router;
