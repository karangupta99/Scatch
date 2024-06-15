const express = require('express')
const router = express.Router()
const {registeruser,loginuser} = require("../controlers/authController")

router.get("/",function(req,res){
    res.send("hey users ")
})


router.post("/register", registeruser)
router.post("/login", loginuser)



module.exports = router;

