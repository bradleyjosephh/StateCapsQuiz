const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Score extends Model {}

Score.init(
  {
    //true for request, false its an offer
    value: DataTypes.INTEGER,
  },
  { sequelize, modelName: "score" }
);

module.exports = Score;
