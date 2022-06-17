const comment = require('../models/comment');
const question = require('../models/question');
const user = require('../models/user');
module.exports = {
    createComment: async (req, res) => {
        if(req.body.question_id && req.body.content) {
            const us = await user.findById(req.user.user_id);            
            const qs = await question.findById(req.body.question_id);
            const cm = new comment({
                user: us,
                question: qs,
                content: req.body.content
            });
            await cm.save();
            return res.send(cm);
        }else{
            return res.status(400).json({ message: "question_id and content are required" });
        }
    },
    getCommentById: async (req, res) => {
        try {
            const cm = await comment.findById(req.params.id);
            res.status(200).json(cm);
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};
