const router = require("express").Router();
const forumApi = require("./forum.api");
const replyApi = require("./reply.api");
const authApi = require("./auth.api");

router.use("/auth", authApi);
router.use("/forums", forumApi);
router.use("/replies", replyApi);
router.use("/replies", replyApi);

module.exports = router;
