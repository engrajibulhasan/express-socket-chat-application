// External Modules
const express=require("express");

// Internal Modules
const { getUsers } = require("../controllers/usersController");

const router=express.Router();

router.get('/',getUsers)

module.exports=router;