const { TvShow } = require("../models")

exports.getShows = (req, res) => {
  const { userId } = req.params
  try {
    TvShow.findAll({ where: { userId: userId } })
    .then(tvshows =>
      res.send(tvshows)
    )
  } catch (err) {
    console.log("ERROR: ", err)
  }
}

exports.addShow = (req, res) => {
  const { userId, showApi } = req.body
  try {
    TvShow.findOrCreate({ where: { showApi, userId } }).then(data => {
      if (data[1]) res.status(201).send(data[0])
      else res.status(400).send(data[1])
    })
  } catch (err) {
    console.log("ERROR: ", err)
  }
}

exports.removeShow = (req, res) => {
  const { userId, showApi } = req.body
  try {
    TvShow.destroy({ where: { showApi, userId } }).then(() =>
      res.sendStatus(202)
    )
  } catch (err) {
    console.log("ERROR: ", err)
  }
}
