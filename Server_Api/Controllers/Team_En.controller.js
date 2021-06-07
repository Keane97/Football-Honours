const mongoose = require("mongoose");

const teamEN = mongoose.model("Team_En");
const Lodash = require("lodash");
// const Club = mongoose.model("Club");

// const TeamEn = mongoose.model("Team_En");



/***************************************/
//Get Document
// var id = mongoose.Types.ObjectId('6096b14fbf7dc0bb5114f1c5
//http://localhost:3000/api/getTeamEn GET
module.exports.getTeamEn = (req, res) => {
  teamEN.findById(req.params.id, (err, Team) => {
    if (!Team) {
      return res.status(404).json({
        status: false,
        message: "Team Not Found. Ensure the Document exists."
      });
    } else {
      console.log(Team);
      return res.status(200).json({status: true, Team});
      //return res.status(200).json({ status: true, Deal: Lodash.pick(Deal, ['Address']) });
    }
  });
};

//http://localhost:3000/api/getTeamEn GET
module.exports.getTeamEnList = (req, res, next) => {
  teamEN.find((err, Teams) => {
    if (!err) {
      res.send(Teams);
      console.log(Teams);
    } else {
      console.log(
        "Error retrieving Teams : " + JSON.stringify(err, undefined, 2)
      );
    }
  });
};

// add english Team
/*    NEEDS TESTING        */
module.exports.addTeamEn = (req,res)=> {

  var teamEnLocal = new teamEn();


  teamEnLocal.save((err, doc) => {
    if (!err) {
      res.send(doc);
      console.log(JSON.stringify(doc));

      console.log("Post Invoked TeamEn");
    } else {
      console.log(
        "Error Adding an Team: " + JSON.stringify(err, undefined, 2)
      );
    }
  });

}

// Update Team Details
/* Needs testing */
module.exports.UpdateDealDetails = (req, res) => {

  var teamEnLocal = new teamEn();

  teamEnLocal.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, doc) => {
    if (!err) {
      res.send(doc);
      console.log("Server Object: " + doc);
    } else {
      console.log("Error in Team Save, Find By ID and Update : " + JSON.stringify(err, undefined, 2));}
  });
};

//Remove Team
/*  NEEDS TESTING  */
// ERROR: Argument passed in must be a single String of 12 bytes or a string of 24 hex characters
module.exports.RemoveDealDetails = (req,res) => {
  teamEN.findByIdAndRemove({_id: req.params.id}, (err,doc) => {
    if (!err) {
      console.log("RemoveTeamDetails: " + doc);
        res.send(doc);
    } else {
      console.log(err);
        console.log("Error in Remove Team save, Find By ID and Remove : " + JSON.stringify(err, undefined, 2));}
});
};
