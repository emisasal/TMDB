const express = require("express")
const router = express.Router()
const { Movie } = require("../models")
const moviesController = require("../controllers/moviesController")

// Llama los favoritos del usuario logueado
router.get("/allMovies", (req, res) => {
  const { userId } = req.query
  Movie.findAll({ where: { userId: userId } })
    .then(movies => res.send(movies))
    .catch(err => res.status(500).send(err))
})
// Guarda pelicula en favoritos
router.post("/add", moviesController.addMovie)
// Elimina favoritos
router.delete("/remove", moviesController.removeMovie)

module.exports = router
