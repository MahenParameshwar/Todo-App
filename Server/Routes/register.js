const express = require("express");
const Joi = require("joi");

const registerController = require("../Controllers/register-controller");

const validateUser = require("../Middleware/validateUser");

const router = express.Router();

const schema = Joi.object({
  username: Joi.string().min(3).max(30).required(),

  password: Joi.string().min(6).required(),

  email: Joi.string().email(),
});

router.post("/register", validateUser(schema), registerController);

module.exports = router;
