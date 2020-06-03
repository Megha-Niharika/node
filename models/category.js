const Sequelize = require('sequelize')
const db = require('../database/db.js')
 
module.exports = db.sequelize.define(
  'category',
  {
    c_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    c_name: {
      type: Sequelize.STRING
    }
  }
)