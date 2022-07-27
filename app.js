// External Import
const express = require("express");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const path=require("path");
const cookieParser = require("cookie-parser");

// Internal Import
const { notFoundErrorHandler, defaultErrorHandler }=require('./middlewares/common/errorHandler')

const app=express();
dotenv.config();

//DB connection
mongoose.connect(process.env.DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then((res)=>console.log('Connected with mongo DB'))
.catch((err)=>console.log(err))

// request parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Parse cookies - Signed cookie
app.use(cookieParser(process.env.COOKIE_SECRET))

//Use static folder
app.use(express.static(path.join(__dirname,"public")))

//  Set view Engine
app.set("view engine","ejs")

//Router setup

//404 Not_FOUND Error handler
app.use(notFoundErrorHandler);


//Default Error handler
app.use(defaultErrorHandler)

//App listen
app.listen(process.env.PORT,()=>{
    console.log(`App listening to port ${process.env.PORT}`)
})



