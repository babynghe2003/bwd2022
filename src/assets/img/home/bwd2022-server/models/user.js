//user mongo model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3, 
        maxlength: 20,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 255,
        trim: true,
    },
    age: {
        type: Number,
        min: 0,
        max: 100,
    },
    city: {
        type: String,
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    about: {
        type: String,
        minlength: 3,
        maxlength: 255,
        trim: true,
    },
    phone: {
        type: String,
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    token: {
        type: String
    }
}
, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
