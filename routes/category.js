const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const category = require('../models/category')
users.use(cors())


users.get('/rooms', func(req, res){
    category.findAll({
        attributes: ['c_id', 'c_name']})
    .catch(err => {
      res.send('error: ' + err)
    })
})