const express=require("express");
const router=express.Router();
const { mainPage,loginPage,signupPage,signup,login,user,logout,admin,username,getverified,verifyemail } = require("../controller/usersController");


router.get("/getUsername",username);
router.get("/",mainPage);
router.get("/user",user);
router.get("/login",loginPage);
router.get("/signup",signupPage);
router.post("/login",login);
router.post("/signup",signup);
router.get("/logout",logout);
router.get("/admin",admin)
router.post('/verifyemail', verifyemail );
router.get('/verifing/:id/:token', getverified );


module.exports=router;
