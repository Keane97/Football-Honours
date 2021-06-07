const mongoose = require("mongoose");

var Team_En = new mongoose.Schema({
  _id: {type: mongoose.Schema.Types.ObjectId},
  ClubName: {type: String},
  Honours:{
    LeagueTitles:{type:Number},
      LeagueYearWon:[String],
    EUCup:{type:Number},
      EUCupYearWon:[String],
    ClubWorldCups:{type:Number},
      ClubWCYearWon:[String],
    FaCups:{type:Number},
      FaCupYearWon:[String],
    LeagueCups:{type:String},
      LeagueCupYearWon:[String],
    UEFACups:{type:Number},
      UEFACupYearWon:[String],
    UEFASuperCups: {type:Number},
      UEFASuperCupYearWon:[String],
    CharityShields:{type:Number},
      CharityShieldYearWon:[String]
  }
});




mongoose.model("Team_En", Team_En, 'England');
