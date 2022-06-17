const router = require("express").Router();
const Question = require("../../controllers/question.controller");

router.route("/").get(Question.getAllQuestions).post(Question.createQuestion);
router.route("/:id").get(Question.getQuestionById).delete(Question.deleteQuestion);

module.exports = router;
