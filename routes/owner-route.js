const express = require('express')
const ownerModel = require('../models/user-model')
const router = express.Router()


router.get("/",function(req,res){
    res.send("hey users ")
})

if(process.env.develop =="development"){
    router.post("/create", async function(req, res) {
        try {
            let owners = await ownerModel.find();
            if (owners.length > 0) {
                return res.status(503).send("we can't create extra owner here");
            }
           let {fullname,email,password} = req.body;
           let owner = await ownerModel.create({
            fullname,
            email,
            password
           })
           res.send("lo bhaoi ho gya owner ready")
        } catch (error) {
            res.status(500).send("An error occurred");
        }
    });
  }

 
module.exports = router

