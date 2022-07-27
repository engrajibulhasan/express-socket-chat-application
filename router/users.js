// External Modules
const express=require("express");

// Internal Modules
const { getUsers } = require("../controllers/usersController");
const { templateVariables } = require("../middlewares/common/templateVariables");

const router=express.Router();

router.get('/',templateVariables('Users'),getUsers)

module.exports=router;