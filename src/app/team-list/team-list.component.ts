import { Component, OnInit } from '@angular/core';
import { ITeam } from '../data/team';
import { NbaService } from '../nba.service';
import { TrackingService } from '../tracking.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: ITeam[] = [];

  selectedTeam?: ITeam;

  constructor(private nbaService: NbaService, public trackingService: TrackingService) {
  }

  ngOnInit(): void {
    this.nbaService.getTeams().pipe().subscribe((teams: ITeam[]) => {
      this.teams = teams.sort((a, b) => a.name.localeCompare(b.name));
      this.selectedTeam = this.teams[0];
    });
  }

  addSelectedTeam() : void {

    if (!this.selectedTeam) {
      return;
    }

    if (this.trackingService.isTracked(this.selectedTeam!)) {
      alert('This team is already being tracked');
      return;
    }

    this.trackingService.trackTeam(this.selectedTeam!);
  }

  removeSelectedTeam(team: ITeam) : void {
    this.trackingService.untrackTeam(team);
  }
}
