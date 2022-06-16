const question = require('../models/question');
const user = require('../models/user');
const tag = require('../models/tag');
const comment = require('../models/comment');

module.exports = {
    getAllQuestions: async (req, res) => {
        try {
            const questions = await question.find({});
            res.status(200).json(questions);
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    getQuestionById: async (req, res) => {
        try {
            const ques = await question.findById(req.params.id);
            res.status(200).json(ques);
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    createQuestion: async (req, res) => {
        try {
            if(req.body.title && req.body.content && req.body.tags) {
                const us = await user.findById(req.user.user_id);            
                let reqtags = req.body.tag;
                let tg = [];
                reqtags.map(async (tag) => {
                    let tagg = await tag.findById(tag);
                    if (!tagg) {
                        tagg = await tag.create({
                            name: tag
                        });
                        tg.push(tagg);
                    }
                });            
                const qs = new question({
                    author: us,
                    title: req.body.title,
                    content: req.body.content,
                    tag: tg
                });
                qs.save();
                res.status(200).json(qs);
            }else{
                res.status(400).json({ message: "title, content and tags are required" });
            }            
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    deleteQuestion: async (req, res) => {
        try {
            const question = await question.findByIdAndDelete(req.params.id);
            res.status(200).json(question);
        }
        catch (err) {
            res.status(500).json({ message: err.message });
        }
    }
};
