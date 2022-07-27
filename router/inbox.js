const express=require("express");
const router=express.Router();

router.get('/',(req,res)=>{
    res.send('Inbox page')
})

module.exports=router;