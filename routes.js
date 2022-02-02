var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
    //console.log("Welcome to the index file");
    res.render("index")
});

router.get("/home", function(req, res){
    res.render("home")
});

module.exports = router;