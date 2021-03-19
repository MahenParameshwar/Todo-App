const Bucket = require("../../Model/bucketModel");
const User = require("../../Model/userModel");

const getBucketListController = async (req, res) => {
  try {
    const { data: _id } = req.id;
    console.log(_id);
    let user = await User.findById(_id).populate({
      path: "buckets",
      populate: {
        path: "todos",
      },
    });

    return res.status(200).json({
      username: user.username,
      bucketList: user.buckets,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = getBucketListController;
