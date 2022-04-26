const express = require("express")
const router = express.Router()

const users = require("./users")
const movies = require("./movies")
const tvshows = require("./shows")

router.use("/user", users)
router.use("/movies", movies)
router.use("/shows", tvshows)

module.exports = router