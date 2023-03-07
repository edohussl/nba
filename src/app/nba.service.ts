import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { ITeamData } from './data/teamdata';
import { ITeam } from './data/team';
import { IGame } from './data/game';
import { IGameData } from './data/gamedata';
import buildUrl from 'build-url-ts';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NbaService {

  private datepipe: DatePipe = new DatePipe('en-US')
  private httpOptions = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  getTeams(): Observable<ITeam[]> {
    return this.httpClient.get<ITeamData>('https://free-nba.p.rapidapi.com/teams', this.httpOptions).pipe(
      map((data: ITeamData) => data.data));
  }

  getTeam(id: number): Observable<ITeam | null> {
    return this.httpClient.get<ITeam>('https://free-nba.p.rapidapi.com/teams/' + id, this.httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 404) {
          return of(null);
        }

        throw error;
      }));
  }

  getGames(id: number, dates: Date[]): Observable<IGame[]> {

    var url = buildUrl('https://free-nba.p.rapidapi.com', {
      path: 'games',
      disableCSV: true,
      queryParams: {
        'team_ids[]': id,
        'dates[]': dates.map(d => this.datepipe.transform(d, 'yyyy-MM-dd')!)
      }
    });

    return this.httpClient.get<IGameData>(url, this.httpOptions).pipe(
      map((data: IGameData) => data.data));
  }
}
