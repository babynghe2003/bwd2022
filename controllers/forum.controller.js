const Forum = require("../models/forum");
const User = require("../models/user");
// const { db } = require("../models/forum");

module.exports = {
  create: (req, res) => {
    User.findById(req.user.user_id).
    then((user) => {
      Forum.create({
        title: req.body.title,
        description: req.body.description,
        author: user
      }).then((forum) => {
        res.json(forum);
      });
    }).
    catch((err) => {
      res.status(422).json(err);
    });
  },
  findAll: (req, res) => {    
    Forum.find({})
      .sort({date:"desc"})
      .then((dbForums) => res.json(dbForums))
      .catch((err) => res.status(422).json(err));
  },
  findByCategory: (req, res) => {
    Forum.find({categorys: {name: req.params.category}})
      .sort({date:"desc"})
      .then((dbForums) => res.json(dbForums))
      .catch((err) => res.status(422).json(err));
  },
  findById: (req, res) => {
    Forum.findById(req.params.forumId)
      .then((dbForum) => res.json(dbForum))
      .catch((err) => res.status(422).json(err));
  },
  deleteById: (req, res) => {
    Forum.findById(req.params.forumId)
      .then((dbForum) => {
        if (dbForum.author == req.user.user_id) {
          dbForum.remove();
          res.json(dbForum);
        } else {
          res.status(422).json({ error: "You can't delete this" });
        }
      })
      .catch((err) => res.status(422).json(err));
  },
  updateById: async (req, res) => {
    Forum.findById(req.params.forumId)
      .then((dbForum) => {
        if (dbForum.author == req.user.user_id) {
          dbForum.title = req.body.title;
          dbForum.description = req.body.description;
          dbForum.save();
          res.json(dbForum);
        } else {
          res.status(422).json({ error: "You can't update this" });
        }
      }).catch((err) => res.status(422).json(err));    
  },
};
