const Sequelize = require("sequelize")

const db = new Sequelize('TMDB_Users', null, null, {
    host: "localhost",
    dialect: "postgres",
    logging: false
  })

module.exports = db