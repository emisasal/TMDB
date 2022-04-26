const User = require("./User")
const Movie = require("./Movie")
const TvShow = require("./TvShow")

Movie.belongsTo(User)
TvShow.belongsTo(User)

module.exports = { User, Movie, TvShow }