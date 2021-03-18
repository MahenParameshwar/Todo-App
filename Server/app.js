const express = require("express");
const cors = require("cors");

const connectDB = require("./Config/db");

const dotenv = require("dotenv");

const app = express();
const port = 8000;
dotenv.config();

connectDB();

app.use(
  cors({
    origin: "*",
  })
);

app.listen(process.env.PORT || 8000, () => {
  console.log("You are connected");
});
