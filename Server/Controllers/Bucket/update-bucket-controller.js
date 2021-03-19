const Bucket = require("../../Model/bucketModel");
const Todo = require("../../Model/todoModel");
const updateBucketListController = async (req, res, next) => {
  try {
    const { bucketId } = req.params;

    await Bucket.findByIdAndUpdate(
      bucketId,
      {
        ...req.body,
      },
      { useFindAndModify: false, new: true }
    );

    next();
  } catch (err) {
    return res.status(400).json({
      message: err.messgae,
    });
  }
};

module.exports = updateBucketListController;
