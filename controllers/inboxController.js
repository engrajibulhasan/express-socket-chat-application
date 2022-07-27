const getInbox=(req,res,next)=>{
    res.locals.title="Inbox-Chat Application"
    res.render('inbox')
}

module.exports={
    getInbox
}