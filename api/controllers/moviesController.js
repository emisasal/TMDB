const { Movie } = require("../models")

exports.addMovie = (req, res) => {
  const { userId, movie, name } = req.body
  try {
    Movie.create({ name: name, movie: movie, userId: userId })
      .then(data => res.send(data))
      .catch(() => res.status(500).send("Already added"))
  } catch (err) {
    console.log("ERROR: ", err)
  }
}

exports.removeMovie = (req, res) => {
  const { userId, movieId } = req.query
  console.log("BODY", req.params)
  console.log("MOVIE_ID", movieId)
  console.log("USER", userId)
  try {
    Movie.destroy({ where: { id: movieId, userId: userId } })
      .then(() => res.sendStatus(202))
      .catch(err => res.status(500).send(err))
  } catch (err) {
    console.log("ERROR: ", err)
  }
}
