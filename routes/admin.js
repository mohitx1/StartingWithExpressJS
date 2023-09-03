const express=require('express');
const router=express.Router()

//using same routes for get and post requests
router.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" ><button type="submit">Add product</button></form>')
})

//post route same as add-product
router.post("/add-product",(req,res,next)=>{
    console.log(req.body.title)
    res.redirect('/')
})

module.exports=router