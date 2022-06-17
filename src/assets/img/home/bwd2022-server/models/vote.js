// comment schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var commentSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    id:{
        type: String,
        required: true,
    },
    vote:{
        type: Number,
        required: true,
    }
}
, { timestamps: true });

module.exports = mongoose.model("Vote", commentSchema);
