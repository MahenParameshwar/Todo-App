const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bucketSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    todos: [{ type: Schema.Types.ObjectId, ref: "Todo" }],
    allDone: { type: Boolean, default: false },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Bucket", bucketSchema);
