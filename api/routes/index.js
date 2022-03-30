const express = require("express")
const router = express.Router()

const users = require("./users")
const movies = require("./movies")
const tvshows = require("./tvshows")

router.use("/user", users)
router.use("/favourites/movie", movies)
router.use("/favourites/tv", tvshows)

module.exports = router