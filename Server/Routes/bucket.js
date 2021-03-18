const Bucket = require("../Model/bucketModel");
const express = require("express");
const authenticateToken = require("../Middleware/authenticateToken");
const createBucketController = require("../Controllers/Bucket/create-bucket-controller");
const getBucketListController = require("../Controllers/Bucket/get-bucket-controller");
const route = express.Router();

route.post(
  "/auth/createBucketList",
  [authenticateToken, createBucketController],
  getBucketListController
);

route.get("/auth/getBucketList", authenticateToken, getBucketListController);

module.exports = route;
