const mongoose = require("mongoose");

const MONGODB_URI = "mongodb+srv://LiamAdmin:Stannis12@teamstats.zr0hr.mongodb.net/Teams?retryWrites=true&w=majority";

mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (!err) {
      console.log("Connection Succeeded");
    } else {
      console.log(
        "Error in MongoDB connection : " + JSON.stringify(err, undefined, 2)
      );
    }
  }
);

require("./Schemas/Team_EN.model");
