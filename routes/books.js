const express = require('express')
const router = express.Router()
const book = require('../models/books')
 
router.get('/:c_id', (req, res) => {
    book.findAll({
        attributes: ['b_id', 'c_id','b_name', 'a_name'],
        where:{
            c_id: req.params.c_id
        }})
    .then(function(results){
      res.send(results);
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
 
module.exports = router;