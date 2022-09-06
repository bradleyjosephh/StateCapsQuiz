// //Score model for a user
// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../db");

// class Score extends Model {}

// Score.init(
//   {
//     value: DataTypes.INTEGER,
//   },
//   { sequelize, modelName: "score" }
// );

// module.exports = Score;


const { model, Schema } = require('mongoose')

const Score = new Schema({
  value: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {timestamps: true} )

module.exports = model('Score', Score)