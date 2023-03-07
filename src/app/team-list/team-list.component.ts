import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITeam } from '../data/team';
import { NbaService } from '../nba.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: ITeam[] = [];

  trackedTeams: ITeam[] = [];

  selectedTeamId?: number;

  constructor(private nbaService: NbaService) {
  }

  ngOnInit(): void {
    this.nbaService.getTeams().pipe().subscribe((teams: ITeam[]) => {
      this.teams = teams.sort((a, b) => a.name.localeCompare(b.name));
      this.selectedTeamId = this.teams[0].id;
    });
  }

  addSelectedTeam(form: NgForm) {
    console.log('Add ' + this.selectedTeamId);
  }
}
