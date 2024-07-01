const express = require('express')
const router = express.Router()
const {registeruser,loginuser} = require("../controlers/authController")
const userModel = require('../models/user-model')
const isloggedin = require('../middleware.js/isloggedin')

router.get("/",function(req,res){
    res.send("hey users ")
})


router.post("/register", registeruser)
router.post("/login", loginuser)



module.exports = router;



