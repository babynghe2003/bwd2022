const express = require('express')

const router = require("express").Router();
const User = require("../../controllers/user.controller.js");
router.route("/login").post(User.login);
router.route("/register").post(User.register);
router.route("/user/:id").get(User.getUserById);

module.exports = router;
