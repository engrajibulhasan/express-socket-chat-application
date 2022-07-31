const bcrypt=require("bcrypt")
const getUsers=(req,res,next)=>{
    res.render('users')
}

async function addUser(req,res,next){
    let newUser;
    // Password hash
    const hashedPassword=await bcrypt.hash(req.body.password,10);
    if(req.files && req.files.length>0){
        newUser=new User({
            ...req.body,
            avatar:req.files[0].filename,
            password:hashedPassword
        })
    }else{
        newUser=new User({
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