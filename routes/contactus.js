const express=require('express');
const router=express.Router()
const path=require('path')

//using same routes for get and post requests
router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","contactus.html"))
})

//post route same as contactus
router.post("/contactus",(req,res,next)=>{
    res.redirect('/success')
})


module.exports=router