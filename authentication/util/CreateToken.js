const jwt = require("jwt");
require("dotenv").config();


const createToken  = async(id)=>{
    jwt.sign({user_id : id}, process.env.SECRET,{
        expiresIn: 3 * 24 * 60 * 60,
    })
};


module.exports = {createToken};