const bcrypt=require("bcrypt");
const Users = require("../models/People");
const getUsers=(req,res,next)=>{
    res.render('users')
}

async function addUser(req,res,next){
    console.log("Comes in Add user");
    let newUser;
    // Password hash
    const hashedPassword=await bcrypt.hash(req.body.password,10);
    if(req.files && req.files.length>0){
        newUser=new Users({
            ...req.body,
            avatar:req.files[0].filename,
            password:hashedPassword
        })
    }else{
        newUser=new Users({
            ...req.body,
            password:hashedPassword
        })
    }

    // Save ibn database
    try{
        const response=await newUser.save();
        res.status(200).json({
            message:"New User Created"
        })
    }catch(err){
        res.status(500).json({
            errors:{
                common:{
                    msg:"unknown error cooured while adding into database"
                }
            }
        })
     }
}

module.exports={
    getUsers,
    addUser
}