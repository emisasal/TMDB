const express = require("express")
const router = express.Router()
const showsController = require("../controllers/showsController")

router.get("/all", showsController.getShows)
router.post("/add", showsController.addShow)
router.delete("/remove", showsController.removeShow)

module.exports = router
