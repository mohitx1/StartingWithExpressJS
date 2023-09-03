const express=require('express');
const router=express.Router()
const path=require('path')
const fs=require('fs')

//using same routes for get and post requests
router.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","contactus.html"))
})

//post route same as contactus
router.post('/contactus', (req, res, next) => {
    console.log(`Name: ${req.body.name} - Email id: ${req.body.email}`);
    const userDetails = `Name: ${req.body.name} - Email id: ${req.body.email}\n`;
    
    fs.appendFile('userDetails.txt', userDetails, (err) => {
        if (err) {
            console.error(`Error Occurred: ${err}`);
        } else {
            console.log('Data written to userDetails.txt');
            res.redirect('/success');
        }
    });
});


module.exports=router