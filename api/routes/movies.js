const express = require("express")
const router = express.Router()
const { Movie } = require("../models")

// Llama los favoritos del usuario logueado
router.get("/", (req, res) => {
  const { userId } = req.query
  Movie.findAll({ where: { userId: userId } })
    .then(movies => res.send(movies))
    .catch(err => res.status(500).send(err))
})

// Postea favoritos del usuario logeado
router.post("/", (req, res) => {
  console.log("REQ PARAMS", req.params)
  const { userId, movieId, movieName } = req.query
  Movie.create({ name: movieName, movie: movieId, userId: userId })
    .then(data => res.send(data))
    .catch(() => res.status(500).send("Already added"))
})

// Elimina favoritos
router.delete("/", (req, res) => {
  const { userId, movieId } = req.query
  Movie.destroy({ where: { id: movieId, userId: userId } })
    .then(() => res.sendStatus(202))
    .catch(err => res.status(500).send(err))
})

module.exports = router
