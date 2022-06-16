//user mongo model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tagSchema = new Schema({
    tag: {
        type: String,
        required: true,
        unique: true,
        minlength: 3, 
        maxlength: 20,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
        trim: true,
    }
}
, { timestamps: true });

module.exports = mongoose.model("Tag", tagSchema);
