const Bucket = require("../Model/bucketModel");
const express = require("express");
const authenticateToken = require("../Middleware/authenticateToken");
const createBucketController = require("../Controllers/Bucket/create-bucket-controller");
const getBucketListController = require("../Controllers/Bucket/get-bucket-controller");
const updateBucketListController = require("../Controllers/Bucket/update-bucket-controller");
const deleteBucketListController = require("../Controllers/Bucket/delete-bucket-controller");
const route = express.Router();

route.post(
  "/auth/createBucketList",
  [authenticateToken, createBucketController],
  getBucketListController
);

route.put(
  "/auth/updateBucketList/:bucketId",
  [authenticateToken, updateBucketListController],
  getBucketListController
);

route.delete(
  "/auth/deleteBucketList/:bucketId",
  [authenticateToken, deleteBucketListController],
  getBucketListController
);

route.get("/auth/getBucketList", authenticateToken, getBucketListController);

module.exports = route;
