import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EnglishTeam } from '../Models/EnglishTeam.model';

@Injectable({
  providedIn: 'root'
})
export class EnglishTeamsService {


  ListOfEnglishTeams!: EnglishTeam[];
  selectedTeam!: EnglishTeam;

  constructor(private http: HttpClient) {}


  getAllEnglishTeams(){
    return this.http.get('http://localhost:3000/api/allTeamsEn');
  }

  GetSingleEnglishTeam(_id: string){
    console.log( "ID is "+_id);

    return this.http.get<EnglishTeam>('http://localhost:3000/api/getTeamEn/' + `${_id}`);
  }

  UpdateSingleEnglishTeam(){}

  RemoveSingleEnglishTeam(){}


}
