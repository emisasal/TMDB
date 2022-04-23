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
  const { userId, movie } = req.query
  try {
    Movie.destroy({ where: { movie: movie, userId: userId } })
      .then(() => res.sendStatus(202))
      .catch(err => res.status(500).send(err))
  } catch (err) {
    console.log("ERROR: ", err)
  }
}
