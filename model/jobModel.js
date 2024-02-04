const mongoose = require("mongoose");
const { Schema } = mongoose;

const jobsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    postedDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//"Job" is the collection in our database and we are putting the schema into the collection
const JobModel = mongoose.model("Job", jobsSchema);
module.exports = JobModel;
