
const Sequelize = require('sequelize')
const db = require('../database/db.js')
 
module.exports = db.sequelize.define(
'books',
  {
b_id: {
type:Sequelize.INTEGER,
primaryKey:true
    },
c_id: {
type:Sequelize.INTEGER
    },
b_name: {
type:Sequelize.STRING
    },
a_name: {
type:Sequelize.STRING
    }
  }
)

