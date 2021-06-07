const mongoose = require("mongoose");

var Club = new mongoose.Schema({
  Club: {type: String},
  YearFounded: {type:String}
});




mongoose.model("Club", Club, 'Club');
