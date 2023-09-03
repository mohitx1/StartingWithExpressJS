
const express=require("express");
const bodyParser=require('body-parser');


const app=express();

app.use(bodyParser.urlencoded({extended:false}))
//this will enocde the body that we will receive from input type of form html


// app.use("/",(req,res,next)=>{
//     console.log('This always runs')
//     next()

// })


app.use('/add-product',(req,res,next)=>{
    // console.log('This is middleware')
    res.send('<form action="/product" method="POST"><input type="text" name="title" ><button type="submit">Add product</button></form>')
    // next()
})

app.use("/product",(req,res,next)=>{
    console.log(req.body)
    // res.redirect('/add-product')
    res.redirect('/')
    // res.send("<h1>Welcome to Express</h1>")

})

app.use("/",(req,res,next)=>{
    res.send("<h1>Welcome to Express</h1>")

})

app.listen(3000)

