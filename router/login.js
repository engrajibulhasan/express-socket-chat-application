// External Module
const express=require("express");

// Internal Module
const { getLogin } = require("../controllers/loginController");
const { templateVariables } = require("../middlewares/common/templateVariables");
const router=express.Router();

//With custom Middleware
router.get('/', templateVariables('Login'), getLogin);

module.exports=router;