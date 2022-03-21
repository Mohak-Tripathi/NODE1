const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    likes: { type: Number, default:0},
    coverImage: {type: String, required:true},
    content: { type: String, required:true},
    authorId: {type: mongoose.Schema.Types.ObjectId, ref: "user"},
    publicationId: {type: mongoose.Schema.Types.ObjectId, ref: "publication"}
   
   
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("book", bookSchema);