const express=require('express');
const router=express.Router();
const path=require('path');

const adminControllerMain=require('../controller/cadmin');

//using same routes for get and post requests
router.get('/add-product',adminControllerMain.adminControllerGet);

//post route same as add-product
router.post("/add-product",adminControllerMain.adminControllerPost);

module.exports=router;