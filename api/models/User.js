const S = require("sequelize")
const db = require("../config/db")

const bcrypt = require("bcrypt")

class User extends S.Model {
    hash(password, salt) {
        return bcrypt.hash(password, salt)
      }
}

User.init({
    name: {
        type: S.STRING,
        allowNull: false,
    },
    email: {
        type: S.STRING,
        allowNull: false,
        // isEmail: true,
    },
    password: {
      type: S.STRING,
      allowNull: false,
    },
    salt: {
        type: S.STRING,
    },
}, {sequelize: db, modelName: "user"})

User.beforeCreate(user => {
    return bcrypt
      .genSalt(16)
      .then(salt => {
        user.salt = salt
        return user.hash(user.password, salt)
      })
      .then(hash => {
        user.password = hash
      })
  })

module.exports = User