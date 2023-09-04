const express=require('express');
const router=express.Router();
const path=require('path')

const shopControllerMain = require('../controller/cshop');


router.get("/",shopControllerMain.shopControllerGet);

module.exports=router