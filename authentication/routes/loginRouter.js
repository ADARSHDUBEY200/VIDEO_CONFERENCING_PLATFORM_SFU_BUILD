const {Login} = require("../controllers/LoginControllers.js")
const router = require("express").Router();

router.post("/login", Login);

module.exports = {router};