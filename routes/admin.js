const express=require('express');
const router=express.Router()
const path=require('path')

//using same routes for get and post requests
router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","add-product.html"))
})

//post route same as add-product
router.post("/add-product",(req,res,next)=>{
    console.log(req.body.title)
    res.redirect('/')
})

module.exports=router