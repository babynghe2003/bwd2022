const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    default: "",
  },
  token:{
    type: String,
    default: ""
  },
  birth:{
    type: String,
    default: "__-__-____",
  },
  city:{
    type: String,
    default: "",
  },
  phone:{
    type: String,
    default: "",
  },
  role:{
    type: String,
    default: "user",
  },
  about:{
    type: String,
    default: "A user of the forum",
  }
});

module.exports = mongoose.model("User", UserSchema);
