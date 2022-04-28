const express = require("express")
const router = express.Router()
const moviesController = require("../controllers/moviesController")

router.get("/all/:userId", moviesController.getMovies)
router.post("/add", moviesController.addMovie)
router.post("/remove", moviesController.removeMovie)

module.exports = router
