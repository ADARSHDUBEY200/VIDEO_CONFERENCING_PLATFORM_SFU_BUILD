const {userSchema} = require("../schema/UserSchema.js");
const mongoose = require("mongoose");

const User = mongoose.model("user", userSchema);
module.exports = {User};
