const express=require('express');
const router=express.Router()
const path=require('path')
// const fs=require('fs')

const contactusMain=require('../controller/ccontactus')

//using same routes for get and post requests
router.get('/contactus',contactusMain.contactusGet)

//post route same as contactus
router.post('/contactus',contactusMain.contactusPost);


module.exports=router