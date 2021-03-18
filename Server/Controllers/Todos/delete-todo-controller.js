const Bucket = require("../../Model/bucketModel");
const Todo = require("../../Model/todoModel");
const deleteTodoController = async (req, res, next) => {
  try {
    const { todoId, bucketId } = req.query;

    console.log(todoId, bucketId);

    await Todo.findByIdAndDelete(todoId);

    await Bucket.findByIdAndUpdate(
      bucketId,
      { $pull: { todos: todoId } },
      { useFindAndModify: false, new: true }
    );

    next();
  } catch (err) {
    return res.status(400).json({
      message: err.messgae,
    });
  }
};

module.exports = deleteTodoController;
