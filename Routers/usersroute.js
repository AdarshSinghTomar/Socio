const express=require('express');
const router=express.Router();
const userController=require("../controllers/usercontroller");

router.get('/',userController.users);
router.get('/profile',userController.profile);

module.exports=router;