const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");

class Score extends Model {}

Score.init(
  {
    value: DataTypes.INTEGER,
  },
  { sequelize, modelName: "score" }
);

module.exports = Score;
