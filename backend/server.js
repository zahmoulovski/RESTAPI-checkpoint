const express = require("express");
const cors = require("cors");
const app = express();
const connectdb = require("./config/connect");
const port = 2804;
const userRoutes = require("./routes/user");
require("dotenv").config();
app.use(cors());
app.use(express.json());
connectdb();
app.use("/auth", userRoutes);
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`you are connected to the ${port}`);
});
