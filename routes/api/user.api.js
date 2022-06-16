const router = require("express").Router();
const User = require("../../controllers/user.controller");

router.route("/:id").get(User.getUserById);

module.exports = router;
