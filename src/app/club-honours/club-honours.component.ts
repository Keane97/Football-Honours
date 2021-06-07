import { Component, OnInit } from '@angular/core';
import { EnglishTeam } from '../Shared/Models/EnglishTeam.model';
import { EnglishTeamsService } from '../Shared/Services/EnglishTeams.Service';

@Component({
  selector: 'app-club-honours',
  templateUrl: './club-honours.component.html',
  styleUrls: ['./club-honours.component.css'],
  providers: [EnglishTeamsService]
})
export class ClubHonoursComponent implements OnInit {
  public teamenglish!:EnglishTeam;

  constructor(public englishTeamService: EnglishTeamsService) { }
  ngOnInit() {
   this.GetSingleEnglishTeam("609993fc87ff34b58723ce9e");
  }



  getAllEnglishTeams() {
    this.englishTeamService.getAllEnglishTeams().subscribe((res)=>{
      this.englishTeamService.ListOfEnglishTeams = res as EnglishTeam[];
      console.log("Request from Client " + res);
    });
  }

  GetSingleEnglishTeam(_id: string) {
    this.englishTeamService.GetSingleEnglishTeam(_id).subscribe((res)=>{
      // console.log("The team: "+ res);
      // const obs = this.englishTeamService.GetSingleEnglishTeam(_id)
      this.teamenglish = res.Team;
       console.log("The Team Var:" + this.teamenglish);
       console.log("The Team String:" + JSON.stringify(this.teamenglish));

    })
  }

}
