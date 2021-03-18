const Bucket = require("../../Model/bucketModel");
const getBucketListController = async (req, res) => {
  try {
    const { data: _id } = req.id;
    console.log(_id);
    const data = await Bucket.find({
      user: _id,
    }).populate({
      path: "todos",
    });
    return res.status(200).json({
      data,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).josn({
      message: err.message,
    });
  }
};

module.exports = getBucketListController;
