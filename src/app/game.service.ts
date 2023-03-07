import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IGame } from './data/game';
import { Result } from './data/result';
import { Results } from './data/results';
import { NbaService } from './nba.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private nbaService: NbaService) {
  }

  public getGames(teamId: number, history: number): Observable<IGame[]> {
    return this.nbaService.getGames(teamId, this.getPastDates(history));
  }

  public getResults(teamId: number, history: number): Observable<Results> {
    return this.nbaService.getGames(teamId, this.getPastDates(history)).pipe(
      map((games: IGame[]) => this.createResults(teamId, games))
    );
  }

  private getPastDates(history: number): Date[] {
    var list: Date[] = [];

    for (let i: number = 0; i < history; i++) {
      list.push(this.subtractDays(new Date(), i))
    }

    return list;
  }

  private subtractDays(date: Date, days: number): Date {
    date.setDate(date.getDate() - days);
    return date;
  }

  private createResults(teamId: number, games: IGame[]): Results {

    var results: Result[] = [];

    games.forEach(game => {
      var scored: number = 0;
      var conceded: number = 0;

      if (game.home_team.id == teamId) {
        scored = game.home_team_score;
        conceded = game.visitor_team_score;
      }
      else {
        scored = game.visitor_team_score;
        conceded = game.home_team_score;
      }

      results.push(new Result(scored, conceded));
    });

    return new Results(results);
  }

}