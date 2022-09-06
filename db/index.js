// // connection string to potential deployed app and localdb
// const { Sequelize } = require('sequelize')

// module.exports = new Sequelize(process.env.JAWSDB_URL || process.env.LOCALDB_URL)


module.exports = require('mongoose').connect('mongodb://localhost:27017/statesQuiz')