
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {generateToken} = require('../utils/generateToken')
const userModel = require('../models/user-model')

module.exports.registeruser = async  function(req,res){
    try{
     let{email,fullname,password} = req.body;
     let user = await userModel.findOne(email)
   if(user) return res.send("u are already registered")
  
      bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(password, salt, async function(err, hash) {
          let user = await userModel.create({
                  fullname,
                  email,
                  password:hash
              })
              let token = generateToken;
              res.cookie("token",token)
              res.send("user successfully register")
          });
         
      });
    }
    catch(err){
     console.log(err.message)
    }
 }

 module.exports.loginuser = async function(req,res){
try{
    let{email,password} = req.body;

    let user = await userModel.findOne({email:email})
    if(!user) return res.send("u register first then login bro")
    
        bcrypt.compare(password, user.password, function(err, result) {
            if(result) {
                let token = generateToken(user)
                res.cookie("token",token)
                res.send("u can login")
            }
        });
}
catch(err){
    console.log(err.message)
}
 }
 

 
