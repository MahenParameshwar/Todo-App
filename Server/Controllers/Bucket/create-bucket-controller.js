const Bucket = require("../../Model/bucketModel");
const User = require("../../Model/userModel");
const createBucketController = async (req, res, next) => {
  try {
    const { data: _id } = req.id;
    const bucket = {
      user: _id,
      ...req.body,
    };

    const newBucket = await Bucket.create(bucket);

    await User.findByIdAndUpdate(
      _id,
      {
        $addToSet: { buckets: newBucket._id },
      },
      { useFindAndModify: false, new: true }
    );

    return next();
  } catch (err) {
    return res.status(400).json({
      message: err.messgae,
    });
  }
};

module.exports = createBucketController;
