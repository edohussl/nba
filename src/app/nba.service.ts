import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IData } from './data/data';
import { ITeam } from './data/team';

@Injectable({
  providedIn: 'root'
})
export class NbaService {

  private  httpOptions = {
    headers: new HttpHeaders({ 
      'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    })
  };

  constructor(private httpClient: HttpClient) { 

  }

  getTeams(): Observable<ITeam[]> {
    return this.httpClient.get<IData>('https://free-nba.p.rapidapi.com/teams', this.httpOptions).pipe(
      map((data: IData) => data.data));
  }
}
