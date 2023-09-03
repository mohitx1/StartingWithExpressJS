const express=require('express');
const router=express.Router();
const path=require('path');
const rootDir=require('../util/path')


router.get("/",(req,res,next)=>{
    // res.sendFile(path.join(__dirname,'..',"views","shop.html"))
    ////instead of this we can even use rootDir and require it from util
    res.sendFile(path.join(rootDir,"views","shop.html"))
});

module.exports=router