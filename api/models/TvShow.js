const S = require("sequelize")
const db = require("../config/db")

class TvShow extends S.Model {}

TvShow.init({
    name: {
        type: S.STRING,
        allowNull: false,
    },
    tvshow: {
        type: S.INTEGER,
        allowNull: false,
    }
}, {sequelize: db, modelName: "tvshow"})

module.exports = TvShow