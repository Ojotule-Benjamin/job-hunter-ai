const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const jobRoutes = require("./routes/jobsRoutes");

dotenv.config();

//database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database is connected"))
  .catch((err) => console.log("Database is not connected", err));

const app = express();

const PORT = 8000;

//routes
app.use("/", jobRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
