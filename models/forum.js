const mongoose = require("mongoose");

const { Schema } = mongoose;

const ForumSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  vote: { type: Number, default: 0 },
  replies: [
    {
      type: Schema.Types.ObjectId,
      ref: "ReplyToForum",
    },
  ],
  categorys: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});

const Forum = mongoose.model("Forum", ForumSchema);

module.exports = Forum;
