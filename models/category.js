const Sequelize = require('sequelize')
const db = require('../database/db.js')

 

module.exports = db.sequelize.define(
  'category',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    b_name: {
      type: Sequelize.STRING
    }
  }
)