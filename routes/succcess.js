const express=require('express');
const router=express.Router();
const path=require('path');

// const rootDir=require('../util/path')
const successControllerMain=require('../controller/csuccess')


router.get("/success",successControllerMain.successControllerGet)

module.exports=router