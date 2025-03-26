const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./Routes/AuthRouters");
const cookieParser = require("cookie-parser");

app.listen(4000, () => {
  console.log("server is running on port 4000");
})

mongoose.connect("mongodb://localhost:27017/jwt", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
}).then(() => {
  console.log("DB connection successful");
})
.catch((err) => {
  console.log(err.message);
})

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true,
}))

app.use(cookieParser());
app.use(express.json());
app.use("/", authRoutes);