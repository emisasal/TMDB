const express = require("express")
const cookieParser = require("cookie-parser")
const sessions = require("express-session")

const cors = require("cors")
const morgan = require("morgan")
require('dotenv').config()

const passport = require("./config/passport")
const app = express()
const routes = require("./routes")
const db = require("./config/db")
const { PORT, SESSION_SECRET } = process.env

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(morgan("tiny"))

app.use(
  sessions({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use((err, req, res, next) => {
  res.status(500).send(err.message)
})

app.use("/api", routes)

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("Escuchando en el puerto ", PORT)
  })
})
