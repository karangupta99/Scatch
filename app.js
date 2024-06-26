const express = require("express")
const app = express()
const path = require('path')
const cookieparser = require('cookie-parser')
const userRouter = require("./routes/user-route")
const productRouter = require("./routes/products-route")
const ownerRouter = require("./routes/owner-route")
const indexRouter = require("./routes/index")
const db = require("./config/mongoose-connection")
const expressSession = require("express-session")
const flash =  require("connect-flash")
const dotenv = require('dotenv').config()
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.use(cookieparser())
app.set("view engine","ejs")

app.use("/",indexRouter)
app.use("/owner",ownerRouter)
app.use("/product",productRouter)
app.use("/user",userRouter)
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:process.env.EXPRESS_SESSION_SECRET,
})
);

app.use(flash())

app.listen(process.env.PORT || 3000)

