// comment schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var commentSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    question:{
        type: Schema.Types.ObjectId,
        ref: "Question",
        required: true,
    },
    content:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}
, { timestamps: true });

module.exports = mongoose.model("Comment", commentSchema);
