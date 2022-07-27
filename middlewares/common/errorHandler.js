const createHttpError = require("http-errors");

//404 Not_FOUND Error handler
function notFoundErrorHandler(req,res,next){
    next(createHttpError(404,"your requested content was not found!"));
}

//Default Error handler
function defaultErrorHandler(err,req,res,next){
    res.locals.error=process.env.NODE_ENV==="development"?err:{message:err.message}
    res.locals.title="Error Occurred";
    res.locals.message=err.message;
    res.status(err.status|| 500);

    if(res.locals.htmlRequest){
        res.render('error');
    }else{
        res.send(res.locals.error);
    }
    
}

module.exports={
    notFoundErrorHandler,
    defaultErrorHandler
}