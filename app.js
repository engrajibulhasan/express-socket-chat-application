const express = require("express");
const dotenv=require("dotenv");
const mongoose=require("mongoose");

const app=express();
dotenv.config();

mongoose.connect(process.env.DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then((res)=>console.log('Connected with mongo DB'))
.catch((err)=>console.log(err))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
