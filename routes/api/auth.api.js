const router = require("express").Router();
const User = require("../../controllers/user.controller");
router.route("/login").post(User.login);
router.route("/register").post(User.register);

module.exports = router;
