const path=require('path');

const adminControllerGet=(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","add-product.html"))
};

const adminControllerPost=(req,res,next)=>{
    console.log(req.body.title)
    res.redirect('/')
};

module.exports={
    adminControllerGet,
    adminControllerPost
};