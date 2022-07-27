// External Module
const express=require("express");

// Internal Module
const { getInbox } = require("../controllers/inboxController");
const { templateVariables } = require("../middlewares/common/templateVariables");

const router=express.Router();

router.get('/',templateVariables('Inbox') ,getInbox)

module.exports=router;