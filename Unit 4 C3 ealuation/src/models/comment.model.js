const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    body: { type: String, required: true},
    authorId: {type: mongoose.Schema.Types.ObjectId, ref: "user"},
    bookId: {type: mongoose.Schema.Types.ObjectId, ref: "book"},

    
   
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);