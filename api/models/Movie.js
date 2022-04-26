const S = require("sequelize")
const db = require("../config/db")

class Movie extends S.Model {}

Movie.init({
    // name: {
    //     type: S.STRING,
    //     allowNull: false,
    // },
    movieApi: {
        type: S.STRING,
        // allowNull: false,
    },
}, {sequelize: db, modelName: "movie"})

module.exports = Movie