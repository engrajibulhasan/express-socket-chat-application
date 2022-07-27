const getLogin=(req,res,next)=>{
    res.locals.title="Login-Chat Application"
    res.render('login')
}

module.exports={
    getLogin
}