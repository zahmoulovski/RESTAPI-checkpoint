const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://zahmoulovski:Sb5oj2RJbLWVdCil@cluster.gzxzi66.mongodb.net/Auth?retryWrites=true&w=majority"
    );
    console.log("you are connected to the db ");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectdb;
