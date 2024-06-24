const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    age: Number,
    country: String,
    gender: String,
  },
  { timestamps: true }
);

const User = model("customers", userSchema);
module.exports = User;
