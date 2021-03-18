const Bucket = require("../../Model/bucketModel");
const Todo = require("../../Model/todoModel");
const deleteTodoController = async (req, res, next) => {
  try {
    const { todoId } = req.params;

    await Todo.findByIdAndUpdate(
      todoId,
      {
        ...req.body,
      },
      { useFindAndModify: false, new: true }
    );

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
