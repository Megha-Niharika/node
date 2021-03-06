const express = require('express')
const router = express.Router()
const category = require('../models/category')
 
router.get('/', (req, res) => {
    category.findAll({
        attributes: ['c_id', 'c_name']})
    .then(function(results){
      res.send(results);
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
 
module.exports = router;