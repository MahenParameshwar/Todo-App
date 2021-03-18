const express = require("express");
const cors = require("cors");

const connectDB = require("./Config/db");

const dotenv = require("dotenv");
const registerRoute = require("./Routes/register");
const loginRoute = require("./Routes/login");

const app = express();
const port = 8000;
dotenv.config();

connectDB();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use("/api", registerRoute);
app.use("/api", loginRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("You are connected");
});
