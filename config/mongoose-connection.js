const mongoose  = require('mongoose')
const dbgr = require('debug')("development:mongoose")


mongoose
.connect("mongodb://127.0.0.1:27017/Scatch")
.then(function(){
    dbgr("database connected ")
})
.catch(function(err){
dbgr(err.messaage)
})

module.exports = mongoose.connection;
