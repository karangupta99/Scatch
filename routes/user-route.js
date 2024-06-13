const express = require('express')
const router = express.Router()
const {registeruser} = require("../controlers/authController")

router.get("/",function(req,res){
    res.send("hey users ")
})


router.post("/register", registeruser)


module.exports = router;

