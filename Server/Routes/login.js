const express = require("express");
const loginController = require("../Controllers/login-controller");

const router = express.Router();

router.post("/login", loginController);

module.exports = router;
