const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;


app.listen( PORT , (req , res)=>{
    console.log("THE SERVER IS LISTENING FOR THE REQUEST : ")
    // mongoose.connect();
})