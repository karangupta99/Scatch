const express = require('express')
const router = express.Router()

const ownermodel = require("../models/owner-model")
 const dotenv = require('dotenv')
router.get("/",function(req,res){
    res.send("hey users ")
})


module.exports = router

