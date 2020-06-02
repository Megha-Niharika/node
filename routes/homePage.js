
var express = require('express');
var app = express.Router();

app.get("/", function (req, res, next) {
res.send("Home page");
})

    
module.exports = app;

