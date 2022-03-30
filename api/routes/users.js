const express = require("express")
const passport = require("passport")
const { User } = require("../models")
const router = express.Router()

// Register
router.post("/register", (req, res) => {
  User.create(req.body).then(user => {
    res.send(user)
  })
})

// Login
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user)
})

// Logout
router.post("/logout", function (req, res, next) {
  req.logout()
  res.send({})
})

// Persistencia del usuario.
router.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401)
  }
  res.send(req.user)
})

router.use("/", (req, res) => {
  res.sendStatus(404)
})

module.exports = router
