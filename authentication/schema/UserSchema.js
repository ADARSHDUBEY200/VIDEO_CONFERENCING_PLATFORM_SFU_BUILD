const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const userSchema = Schema({
    name : {
        type : String,
        required : true
    },

    email : {

        type : String,
        required : true

    },

    password : {
        type : String,
        required : true
    }
});

module.exports = {userSchema};