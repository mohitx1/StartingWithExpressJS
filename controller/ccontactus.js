const path=require('path')
const fs=require('fs')

exports.contactusGet=(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","views","contactus.html"))
}


exports.contactusPost= (req, res, next) => {
    console.log(`Name: ${req.body.name} - Email id: ${req.body.email}`);
    const userDetails = `Name: ${req.body.name} - Email id: ${req.body.email}\n`;
    
    fs.appendFile('userDetails.txt', userDetails, (err) => {
        if (err) {
            console.error(`Error Occurred: ${err}`);
        } else {
            console.log(`Data written to userDetails.txt: ${req.body.name}`);
            res.redirect('/success');
        }
    });
}
