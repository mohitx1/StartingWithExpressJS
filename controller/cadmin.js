const path=require('path');

exports.adminControllerGet=(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","add-product.html"))
}

exports.adminControllerPost=(req,res,next)=>{
    console.log(req.body.title)
    res.redirect('/')
}