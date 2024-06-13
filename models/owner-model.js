const mongoose = require('mongoose')

const ownerSchem = mongoose.Schema({
    username:{
        type:String,
        trim:true,
        minlength: 3 
    },
    email:String,
    password:String,
    products:{
        type:Array,
        default:[]
    },

    picture:String,
})

module.exports = mongoose.model("owner",ownerSchem)