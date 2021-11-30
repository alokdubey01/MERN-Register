const express = require('express');
const router = express.Router();
const signupTemplate = require('../models/SignUp')
const bcrypt = require('bcrypt')

router.post("/signup", async(req,res) => {

    const saltpassword = await bcrypt.genSalt(10)
    const securepassword = await bcrypt.hash(req.body.password, saltpassword)

    const SignUpUser = new signupTemplate({
        fullname:req.body.fullname,
        username:req.body.username,
        email:req.body.email,
        password:securepassword
    })
    SignUpUser.save()
    .then(data =>{
        res.json(data);
        console.log("Data added successfully...");
    })
    .catch(err =>{
        res.json(err);
        console.log("error");
    }) 
})
module.exports = router;