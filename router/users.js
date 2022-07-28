// External Modules
const express=require("express");
const { check } = require("express-validator");

// Internal Modules
const { getUsers } = require("../controllers/usersController");
const { templateVariables } = require("../middlewares/common/templateVariables");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {userValidator, userValidationHandler} = require("../middlewares/users/newUserValidator");

const router=express.Router();

// Users Page
router.get('/',templateVariables('Users'),getUsers)

// Create New User
router.post('/',avatarUpload,userValidator,userValidationHandler)

module.exports=router;