const uploader = require("../../utils/singleUploader");

const avatarUpload=(req,res,next)=>{
   
    const upload=uploader(
        'avatars', //Upload Directory folder
        ['image/jpg','image/jpeg','image/png'], //Allowed File Types
        1000000, //File size given in Bytes
        'Only JPG,JPEG or PNG allowed' //Error Message
    );

    // multer middleware function
    upload.any()(req,res,(err)=>{
        if(err){
            res.status(500).json({
                errors:{
                    avatar:{
                        msg:err.msg
                    }
                }
            })
        }else{
            next();
        }
    })
}

module.exports=avatarUpload;