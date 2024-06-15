const jwt = require("jsonwebtoken")
const userModel = require("../models/user-model")

module.exports = async  function(req,res,next){
    if(!req.cookie.token){
        req.flash("error","u need to login first")
        return res.redirrect("/")
    }

    try{
        let decoded = jwt.verify(req.cookie.token,process.env.JWT_KEY)
        let user = await userModel.findOne({email:jwt.decoded.email}).select("-password")
        req.user = user;
        next();
    }
    catch(err){
        req.flash("error","something went wrong ")
        res.redirrect("/")
    }
}
