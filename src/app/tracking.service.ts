import { Injectable } from '@angular/core';
import { ITeam } from './data/team';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  private _teams: ITeam[] = [];

  public get teams() : ITeam[] {
    return this._teams;
  }

  constructor() { }

  public trackTeam(team: ITeam): void {
    this._teams.push(team);
  }

  public untrackTeam(team: ITeam): void {
    var index = this._teams.indexOf(team, 0);
    if (index > -1) {
      this._teams.splice(index, 1);
    }
  }

  public isTracked(team: ITeam) : boolean {
    return this._teams.some((t: ITeam) => t.id == team.id);
  }
}
