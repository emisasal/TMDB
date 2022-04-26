const { Movie, User } = require("../models")

exports.getMovies = (req, res) => {
  const { userId } = req.body
  try {
    Movie.findAll({ where: { userId: userId } })
      .then(movies => res.send(movies))
      .catch(err => res.status(500).send(err))
  }catch(err){
    console.log("ERROR: ", err)
  }
}
// Seguir con esto!
exports.addMovie = (req, res) => {
  const { userId, movieApi } = req.body
  console.log("BODY", movieApi)
  try {
    Movie.findOrCreate({ 
      where: { userId, movieApi }, 
      defaults: { movieApi }
    }).then(data => {
      if (data[1]) res.status(201).send(data[0])
      else res.status(400).send(data[1])})
  } catch (err) {
    console.log("ERROR: ", err)
  }
}

exports.removeMovie = (req, res) => {
  const { userId, movieApi } = req.body
  try {
    Movie.destroy({ where: { movieApi: movieApi, userId: userId } })
      .then(() => res.sendStatus(202))
      .catch(err => res.status(500).send(err))
  } catch (err) {
    console.log("ERROR: ", err)
  }
}
