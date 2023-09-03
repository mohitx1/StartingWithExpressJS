const express=require("express");
const bodyParser=require('body-parser');
const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:false}))
//this will enocde the body that we will receive from input type of form html



app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title" ><button type="submit">Add product</button></form>')
})

//app.post will be triggered only for post request instead of app.use which used to get triggered for both post as well as get request
//used app.post instead of app.use
//app.use("/product",(req,res,next)=>{
app.post("/product",(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
//app.post will be triggered only when we visit it through post request otherwise if we visit /product it will just redirectg and not print any thing
})

app.use("/",(req,res,next)=>{
    res.send("<h1>Welcome to Express</h1>")
})

app.listen(`${port}`,()=>{
    console.log(`Listening to port: ${port}`)
})
