// // user model
// const pls = require("passport-local-sequelize");
// const { DataTypes } = require("sequelize");
// const sequelize = require("../db");

// const User = pls.defineUser(sequelize, {});

// module.exports = User;


const { Schema, model } = require('mongoose')

const User = new Schema({

  username: String,
  Score: [{
    type: Schema.Types.ObjectId,
    ref: 'Score'
  }],
}, {timestamps: true})

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)