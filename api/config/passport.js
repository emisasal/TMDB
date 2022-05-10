const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const { hash, genSalt } = require("bcrypt")

const User = require("../models/User")

const genHash = async password => {
  const salt = await genSalt(16)
  const userHash = await hash(password, salt)
  return {
    salt: salt,
    hash: userHash,
  }
}

const verifyHash = async (password, userHash, salt) => {
  return userHash === (await hash(password, salt))
}

// -------------------------------------------- //

const customFields = {
  usernameField: "email",
  passwordField: "password",
}

const verifyCallback = async (email, password, done) => {
  try {
    const user = await User.findOne({where: { email }})
    if (!user) return done(null, false)

    const isValid = await verifyHash(password, user.password, user.salt)
    if (isValid) return done(null, user)

    return done(null, false)
  } catch (error) {
    return done(error)
  }
}

const strategy = new LocalStrategy(customFields, verifyCallback)

passport.use(strategy)

// -------------------------------------------- //

passport.serializeUser((user, done) => {
  return done(null, user.id)
})

passport.deserializeUser(async (userId, done) => {
  try {
    const user = await User.findByPk(userId)
    if (user) return done(null, user)
  } catch (error) {
    return done(error)
  }
})

module.exports = passport
