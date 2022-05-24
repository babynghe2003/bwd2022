const mongoose = require("mongoose");

const { Schema } = mongoose;

const ReplyForumSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  description: {
    type: String,
    required: true,
  },
  forum:{
    type: Schema.Types.ObjectId,
    ref: "Forum",
  },
  vote:{
    type: Number,
    default: 0,
  }
});

const ReplyToForum = mongoose.model("ReplyToForum", ReplyForumSchema);

module.exports = ReplyToForum;
