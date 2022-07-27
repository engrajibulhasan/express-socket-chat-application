const templateVariables=(title)=>{
    return (req,res,next)=>{
        res.locals.htmlRequest=true;
        res.locals.title=`${title}- ${process.env.APP_NAME}`;
        next();
    }
}

module.exports={
    templateVariables
}