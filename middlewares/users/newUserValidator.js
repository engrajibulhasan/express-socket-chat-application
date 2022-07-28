const { check, validationResult } = require("express-validator");
const createHttpError = require("http-errors");
const users=require('../../models/People');
const {path}=require("path");
const {unlink}=require("fs");
const userValidator=[
    check('name').isLength({min:1}).withMessage('Name is required').isAlpha('en-US',{ignore:'-'}).withMessage('Only alphabet allowed').trim(),
    check('email').isEmail().withMessage('Valid email address required').trim().custom(
        async(value)=>{
            try{
                const user=await users.findOne({email:value})
                if(user){
                    throw createHttpError('Email already exists');
                }
            }
            catch(err){
                throw createHttpError(err.message)
            }
        }
    ),
    check('mobile').isMobilePhone('bn-BD',{strictMode:true}).withMessage('Mobile NUmber must be a Bangladeshi Number with 880').trim().custom(
        async(value)=>{
            try{
                const user=await users.findOne({mobile:value})
                if(user){
                    throw createHttpError('Mobile number already exists');
                }
            }
            catch(err){
                throw createHttpError(err.message)
            }
        }
    ),
    check('password').isStrongPassword().withMessage('Need a strong password with min 8 character. Password must habe combination of Upper case, lower case, Numbers and symbols')
];

const userValidationHandler=(req,res,next)=>{
    const errors=validationResult(req);
    const mappedErrors=errors.mapped();
    if(Object.keys(mappedErrors).length===0){
        next()
    }else{
        // Remove uploaded FIle
        if(req.files.length>0){
            const {fileName}=req.files[0];
            unlink (
                path.join(`${__dirname}/../public/uploads/avatars/${fileName}`),
                (err)=>{
                    if(err){
                        console.log(err);
                    }
                }
            )
        }
        res.status(500).json({
            errors:mappedErrors
        })
    }
}

module.exports={
    userValidator,
    userValidationHandler
};