const express=require('express');
const router=express.Router();
const path=require('path');
// const fs=require('fs');

const contactusControllerMain=require('../controller/ccontactus');

//using same routes for get and post requests
router.get('/contactus',contactusControllerMain.contactusControllerGet);

//post route same as contactus
router.post('/contactus',contactusControllerMain.contactusControllerPost);


module.exports=router;