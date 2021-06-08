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
   this.GetSingleEnglishTeam("6096b14fbf7dc0bb5114f1c5");
  }


  getAllEnglishTeams() {
    this.englishTeamService.getAllEnglishTeams().subscribe((res)=>{
      this.englishTeamService.ListOfEnglishTeams = res as EnglishTeam[];
      console.log("Request from Client " + res);
    });
  }

  GetSingleEnglishTeam(_id: string) {
    this.englishTeamService.GetSingleEnglishTeam(_id).subscribe((res)=>{
      this.teamenglish = res.Team;
       console.log("The Team String:" + JSON.stringify(this.teamenglish));

    })
  }

}
