const {SignUp} = require("../controllers/SignUpControllers.js");
const express = require("express");
const router = express.Router();

router.post("/signup", SignUp);

module.exports = {router};
