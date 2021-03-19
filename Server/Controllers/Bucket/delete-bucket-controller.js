const Bucket = require("../../Model/bucketModel");
const Todo = require("../../Model/todoModel");
const User = require("../../Model/userModel");

const deleteBucketListController = async (req, res, next) => {
  try {
    const { bucketId } = req.params;
    const { data: userId } = req.id;
    const bucket = await Bucket.findByIdAndDelete(bucketId);

    // for (let i = 0; i < bucket.todos.length; i++) {
    //   await Todo.findByIdAndDelete(bucket.todos[i], {
    //     useFindAndModify: false,
    //     new: true,
    //   });
    // }

    await User.findByIdAndUpdate(
      userId,
      { $pull: { buckets: bucketId } },
      { useFindAndModify: false, new: true }
    );

    next();
  } catch (err) {
    return res.status(400).json({
      message: err.messgae,
    });
  }
};

module.exports = deleteBucketListController;
