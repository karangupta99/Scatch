const express = require('express')

const router = express.Router()
const isloggedin = require("../middleware.js/isloggedin")

router.get("/",function(req,res){
    let error =req.flash("error");

    res.render("index",{error})
})

router.get("/shop", isloggedin ,function(req,res){
res.render("shop")
})



module.exports = router

