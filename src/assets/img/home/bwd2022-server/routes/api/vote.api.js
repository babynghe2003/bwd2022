const router = require("express").Router();
const Vote = require("../../controllers/vote.controller");

router.route("/:id").post(Vote.vote).get(Vote.findVote);

module.exports = router;
