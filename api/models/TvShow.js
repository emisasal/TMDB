const S = require("sequelize")
const db = require("../config/db")

class TvShow extends S.Model {}

TvShow.init({

    showApi: {
        type: S.STRING,
        // allowNull: false,
    }
}, {sequelize: db, modelName: "tvshow"})

module.exports = TvShow