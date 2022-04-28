const express = require("express")
const router = express.Router()
const showsController = require("../controllers/showsController")

router.get("/all/:userId", showsController.getShows)
router.post("/add", showsController.addShow)
router.post("/remove", showsController.removeShow)

module.exports = router
