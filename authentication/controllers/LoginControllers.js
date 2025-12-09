const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { User } = require("../model/UserModel");
const { createToken } = require("../util/CreateToken");

const Login = async (req , res)=>{

    const {email, password} = req.body;

    if(!email || !password){
        return res.json({message : "All Fields are Required", sucess : false});
    }

    const existingUser  = await User.findOne({email});

    if(!existingUser){
        return res.status(400).json({message : "Enter Valid email and password", success : false});
    };


    const auth = bcrypt.compare(password, existingUser.password);

    if(!auth){
        return res.status(400).json({message : "Enter the valid email and the password", sucess : false});
    };

    const token = createToken(existingUser._id);

    res.cookie("token", token , {

    });


    return res.status(200).json({message : "User Logged In Successfully", success : true});




}

module.exports = {Login}