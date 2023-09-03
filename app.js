// const http=require("http");
const express=require("express");

const app=express();

app.use((req,res,next)=>{
    console.log('This is middleware')
    next()
})

app.use((req,res,next)=>{
    console.log('This is another middleware')
    // next()
    // res.send('<h1> hello to node js </h1>') 
    res.send( { key1: "value" })

    //content-Type:application/json; charset=utf-8



})


// const server=http.createServer(app);
// server.listen(3000)
app.listen(3000)
////Internally do the same thing calls itself inside createrserver

