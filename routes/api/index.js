const router = require("express").Router();
const authApi = require("./auth.api");
const questionApi = require("./question.api");
const commentApi = require("./comment.api");
const voteApi = require("./vote.api");
const userApi = require("./user.api");
const verifyToken = require("./middleware");

router.use("/auth", authApi);
router.use("/question", verifyToken, questionApi);
router.use("/comment", verifyToken, commentApi);
router.use("/vote", verifyToken, voteApi);
router.use("/user", userApi);

module.exports = router;
