const express = require("express")
const cookieParser = require("cookie-parser")
const passport = require("passport")
const sessions = require("express-session")
const localStrategy = require("passport-local").Strategy

const cors = require("cors")
const morgan = require("morgan")

const app = express()
const routes = require("./routes")
const db = require("./config/db")
const PORT = 3001

const User = require("./models/User")

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(morgan("tiny"))

app.use(
  sessions({
    secret: "forza",
    resave: true,
    saveUninitialized: true,
  })
  )
  
  app.use(passport.initialize())
  app.use(passport.session())
  
  passport.use(
    new localStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      function (email, password, done) {
        User.findOne({ where: { email } })
        .then(user => {
          if (!user) {
            // email not found
            return done(null, false)
          }
          
          user.hash(password, user.salt).then(hash => {
            if (hash !== user.password) {
              return done(null, false) // wrong password
            }
            
            return done(null, user) // success :D
          })
        })
        .catch(done) // done(err)
      }
      )
      )
      
      passport.serializeUser(function (user, done) {
        done(null, user.id)
      })
      
      passport.deserializeUser(function (id, done) {
        User.findByPk(id)
        .then(user => {
          done(null, user)
        })
        .catch(done)
      })
      
      app.use((err, req, res, next) => {
        res.status(500).send(err.message)
      })

      app.use("/api", routes)
      
      db.sync({ force: false }).then(() => {
        app.listen(PORT, () => {
          console.log("Escuchando en el puerto ", PORT)
        })
      })
      