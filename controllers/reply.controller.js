const Reply = require("../models/reply");
const Forum = require("../models/forum");

module.exports = {
  create: async (req, res) => {
    const reply = await Reply.create({
      description: req.body.description,
      forum: req.params.forumId,
    });
    await reply.save();    
    const forum = await Forum.findById(req.params.forumId);
    forum.replies.push(reply);
    await forum.save();
    return res.json(reply);
  },
  getReplies: async (req, res) => {
    const replies = await Forum.findById(req.params.forumId).populate(
      "replies"
    );
    res.json(replies);
  },
  deleteByReplyId: async (req, res) => {
    const Reply = Reply.findById(req.params.replyId);
    if (Reply.author.id == req.user.id || req.user.role == "admin") {
      await Reply.remove();
      return res.json(Reply);
    } else {
      return res.status(422).json({ erro: "You can't delete this" });
    }
  },
  updateByReplyId: async (req, res) => {
    const Reply = Reply.findById(req.params.replyId);
    if (Reply.author.id == req.user.id) {
      await Reply.update(req.body);
      return res.json(Reply);
    } else {
      return res.status(422).json({ erro: "You can't update this" });
    }
  },
};
