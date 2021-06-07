export class EnglishTeam {

    _id!:string;
    ClubName?: { type: String; };
    Honours!:{
      LeagueTitles: { type: Number; };
      LeagueYearWon: [String];
      EUCup: { type: Number; };
      EUCupYearWon: [String];
      ClubWorldCups: { type: Number; };
      ClubWCYearWon: [String];
      FaCups: { type: Number; };
      FaCupYearWon: [String];
      LeagueCups: { type: String; };
      LeagueCupYearWon: [String];
      UEFACups: { type: Number; };
      UEFACupYearWon: [String];
      UEFASuperCups: { type: Number; };
      UEFASuperCupYearWon: [String];
      CharityShields: { type: Number; };
      CharityShieldYearWon: [String];
    }
  Team!: EnglishTeam;
}
