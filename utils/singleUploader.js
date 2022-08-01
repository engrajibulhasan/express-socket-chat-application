const createHttpError = require("http-errors");
const multer = require("multer");
const path=require("path")
const uploader=(
    subfolder_path,
    allowed_file_types,
    max_file_size,
    error_msg
)=>{
    const UPLOADS_FOLDER=`${__dirname}/../public/uploads/${subfolder_path}`;

    // Storage
    const storage=multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,UPLOADS_FOLDER)
        },
        filename:(req,file,cb)=>{
            //Getting Extension
            const fileExt=path.extname(file.originalname);
            // Rename File
            const fileName=file.originalname.replace(fileExt,"").toLocaleLowerCase().split(" ").join("-")+"-"+Date.now() ;
            //Callback with new fileName with extension
            cb(null,fileName+fileExt)
        }
    })

    //Final Multer Upload Object
    const upload=multer({
        storage:storage,
        limits:{
            fileSize:max_file_size
        },
        fileFilter:(req,file,cb)=>{
            if(allowed_file_types.includes(file.mimetype)){
                cb(null,true);
            }else{
                //Creating error message with http-errors PACKAGE
                cb(createHttpError(error_msg) )
            }
        }
    })

    return upload;
}

module.exports=uploader;