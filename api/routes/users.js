const express = require("express")
const passport = require("passport")
const router = express.Router()
const userController = require("../controllers/userController")

// Register
router.post("/register", userController.register)
// Login
router.post('/login', passport.authenticate('local'), userController.login)
// Logout
router.post('/logout', userController.logout)

module.exports = router
