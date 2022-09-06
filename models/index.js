// const User = require("./User.js");
// const Score = require("./Score.js");
// //bring in db models

// User.hasMany(Score, { foreignKey: "uid" });

// Score.belongsTo(User, { foreignKey: "uid" });

// module.exports = { User, Score };


module.exports = {
    User: require('./User.js'),
    Score: require('./Score.js'),
  }