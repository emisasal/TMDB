const { User } = require("../models")

exports.register = (req, res) => {
  const { name, email, password } = req.body
  try {
    User.findOrCreate({
      where: { email },
      defaults: {
        name,
        email,
        password,
      },
    }).then(data => {
      if (data[1]) res.status(201).send(data[0])
      else res.status(400).send(data[1])
    })
  } catch (error) {
    console.log("ERROR: ", error)
  }
}

exports.login = (req, res) => {
  try {
    res.send(req.user)
  } catch (error) {
    console.log("ERROR: ", error)
  }
}

exports.logout = (req, res) => {
  try {
    req.logout()
    res.send({})
  } catch (error) {
    console.log("ERROR: ", error)
  }
}

exports.persist = (req, res) => {
  try {
    if (!req.user) {
      return res.sendStatus(401)
    }
    res.send(req.user)
  } catch (error) {
    console.log("ERROR: ", error)
  }
}