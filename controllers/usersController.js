const getUsers=(req,res,next)=>{
    res.locals.title="Users-Chat Application"
    res.render('users')
}

module.exports={
    getUsers
}