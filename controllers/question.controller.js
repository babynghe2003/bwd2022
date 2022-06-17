const question = require('../models/question');
const user = require('../models/user');
const tag = require('../models/tag');
const comment = require('../models/comment');

module.exports = {
    getAllQuestions: async (req, res) => {
        try {
            const questions = await question.find({});
            console.log("Returned")
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
            console.log(req.body)
            console.log(req.user.user_id)
            if(req.body.data.title && req.body.data.content && req.body.data.tags) {
                const us = await user.findById(req.user.user_id);            
                let reqtags = req.body.data.tags;
                let tg = [];
                for(let i = 0; i < reqtags.length; i++) {
                    let tagg = await tag.findOne({ tag: reqtags[i] });
                    if(tagg) {
                        tg.push(tagg._id);
                    }
                    else {
                        let newtag = new tag({ tag: reqtags[i] });
                        await newtag.save();
                        tg.push(newtag._id);
                    }
                }
                const qs = new question({
                    author: us,
                    title: req.body.data.title,
                    content: req.body.data.content,
                    tags: tg
                });
                await qs.save();
                res.status(200).json(qs);
            }else{
                console.log('err')
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
