const router = require("express").Router();
const forumApi = require("./forum.api");
const replyApi = require("./reply.api");
const authApi = require("./auth.api");

const verifyToken = require("./middleware");

router.use("/forums", verifyToken, forumApi);
router.use("/replies", verifyToken, replyApi);
router.use("/auth", authApi);

module.exports = router;
