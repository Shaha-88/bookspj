const { model, Schema } = require("mongoose");

const BookSchema = new Schema(
  {
    title: String,
    author: String,
    price: { type: Number, default: 5 },
    image: String },
 
  { timestamps: true }
);
module.exports = model("Book", BookSchema);
