
const express=require('express');
const homecontroller=require('../Controllers/homecontroller');
const routes=express.Router();

console.log('Middleware is running perfectly');
routes.get('/',homecontroller.home)
routes.use('/users',require('./usersroute'));
module.exports=routes;