const express = require("express")
const router = express.Router()
const moviesController = require("../controllers/moviesController")

router.get("/all", moviesController.getMovies)
router.post("/add", moviesController.addMovie)
router.delete("/remove", moviesController.removeMovie)

module.exports = router
