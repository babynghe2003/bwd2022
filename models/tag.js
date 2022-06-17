//user mongo model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tagSchema = new Schema({
    tag: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        minlength: 3,
        maxlength: 255,
        trim: true,
    }
}
, { timestamps: true });

module.exports = mongoose.model("Tag", tagSchema);
