const express = require("express");
const UserShcema = require("../model/user");

const userRoutes = express.Router();
const { login, register, updateProfile } = require("../controllers/user");
const {
  registerValidation,
  logvalidator,
  validation,
} = require("../middelware/RegisterValidator");

const { isAuth } = require("../middelware/isAuth");

userRoutes.post("/singup", registerValidation, validation, register);

userRoutes.post("/signin", logvalidator, validation, login);

userRoutes.get("/uraccount", isAuth, (req, res) => {
  res.send(req.user);
});

userRoutes.get("/alluser", async (req, res) => {
  try {
    const getall = await UserShcema.find();
    res.send(getall);
  } catch (err) {
    console.log(err);
  }
});

module.exports = userRoutes;
