const express = require("express")
const passport = require("passport")
// const { User } = require("../models")
const router = express.Router()
const userController = require("../controllers/userController")

// Register
router.post("/register", userController.register)
// Login
router.post('/login', passport.authenticate('local'), userController.login)
// Logout
router.post('/logout', userController.logout)
// Persist
router.get("/me", userController.persist)

router.put("/addMovie", userController.addMovie)

module.exports = router
