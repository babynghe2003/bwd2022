const comment = require('../models/comment');
const question = require('../models/question');
const user = require('../models/user');
const vote = require('../models/vote');
module.exports = {
    vote: async (req, res) => {
        if(req.body.comment_id && req.body.vote) {
            const us = await user.findById(req.user.user_id);            
            const cm = await comment.findById(req.body.comment_id);
            const vt = new vote({
                user: us,
                id: cm.__id,
                vote: req.body.vote ? 1 : -1
            });
            await vt.save();
            return res.status(200).send("1");
        }
        if(req.body.question_id && req.body.vote) {
            const us = await user.findById(req.user.user_id);            
            const qt = await question.findById(req.body.question_id);
            const vt = new vote({
                user: us,
                id: qt.__id,
                vote: req.body.vote ? 1 : -1
            });
            await vt.save();
            return res.status(200).send("1");
        }
        return res.status(400).send({
            message: "Bad request"
        });
    },
    findVote : async (req, res) => {
        if(req.params.id) {
            const vt = await vote.find({id : req.params.id});
            if(vt) {
                return res.status(200).send(vt);
            }
        }
        return res.status(400).send({
            message: "Bad request"
        });
    }
};
