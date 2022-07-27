// External Module
const express=require("express");

// Internal Module
const { getLogin } = require("../controllers/loginController");
const router=express.Router();

router.get('/',getLogin);

module.exports=router;