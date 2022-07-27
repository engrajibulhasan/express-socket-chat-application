// External Module
const express=require("express");

// Internal Module
const { getInbox } = require("../controllers/inboxController");

const router=express.Router();

router.get('/',getInbox)

module.exports=router;