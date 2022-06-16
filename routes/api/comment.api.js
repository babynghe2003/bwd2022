const router = require("express").Router();
const Comment = require("../../controllers/comment.controller");

router.route("/").post(Comment.createComment);
router.route("/:id").get(Comment.getCommentById);

module.exports = router;
