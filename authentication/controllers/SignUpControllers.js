const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const {User} = require("../model/UserModel.js")
const bcrypt = require("bcrypt");
const { createToken } = require("../util/CreateToken.js");

const SignUp = async(req , res) =>{
    const {name , email, password} = req.body

    const user = await User.find({email});

    if(user){
        return res.status(400).json({message : "User is already Exist"});
    };

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = User({
        name : name,
        email : email,
        password : hashedPassword
    })

    await newUser.save();

    const token = createToken(user._id);

    res.cookie("token", token , {

    });

    return res.status(200).json({message : "User Signed In SuccessFully", succes : true});
}

module.exports = {SignUp} 