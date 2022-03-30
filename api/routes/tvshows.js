const express = require("express")
const router = express.Router()
const TvShow = require("../models/TvShow")

router.get("/", (req, res) => {
  const { userId } = req.query
  TvShow.findAll({ where: { userId: userId } })
    .then(tvshows => res.send(tvshows))
    .catch(err => res.status(500).send(err))
})

router.post("/", (req, res) => {
  const { userId, tvshowId } = req.query
  TvShow.create({ tvshow: tvshowId, userId: userId })
    .then(data => res.send(data))
    .catch(() => res.status(500).send("Already added"))
})

router.delete("/", (req, res) => {
  const { userId, tvshowId } = req.query
  TvShow.destroy({ where: { tvshow: tvshowId, userId: userId } })
    .then(() => res.sendStatus(202))
    .catch(err => res.status(500).send(err))
})

module.exports = router
