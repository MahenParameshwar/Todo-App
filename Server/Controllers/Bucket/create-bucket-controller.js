const Bucket = require("../../Model/bucketModel");

const createBucketController = async (req, res, next) => {
  try {
    const { data: _id } = req.id;
    const bucket = {
      user: _id,
      ...req.body,
    };

    Bucket.create(bucket).then((bucket) => {
      next();
    });
  } catch (err) {
    return res.status(400).json({
      message: err.messgae,
    });
  }
};

module.exports = createBucketController;
