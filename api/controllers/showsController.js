const { TvShow } = require("../models")

exports.getShows = (req, res) => {
  const { userId } = req.body
  try {
    TvShow.findAll({ where: { userId: userId } })
      .then(tvshows => res.send(tvshows))
      .catch(err => res.status(500).send(err))
  } catch (err) {
    console.log("ERROR: ", err)
  }
}

exports.addShow = (req, res) => {
  const { userId, showApi } = req.body
  try {
    TvShow.findOrCreate({ where: { showApi: showApi, userId: userId } })
      .then(data => res.send(data))
      .catch(() => res.status(500).send("Already added"))
  } catch (err) {
    console.log("ERROR: ", err)
  }
}

exports.removeShow = (req, res) => {
  const { userId, showApi } = req.body
  try {
    TvShow.destroy({ where: { showApi: showApi, userId: userId } })
      .then(() => res.sendStatus(202))
      .catch(err => res.status(500).send(err))
  } catch (err) {
    console.log("ERROR: ", err)
  }
}
