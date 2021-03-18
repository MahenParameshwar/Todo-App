const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bucketSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    todos: [{ type: Schema.Types.ObjectId, ref: "Todo" }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Bucket", bucketSchema);
