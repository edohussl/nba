import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IGame } from '../data/game';
import { ITeam } from '../data/team';
import { GameService } from '../game.service';
import { NbaService } from '../nba.service';

@Component({
  selector: 'app-team-results',
  templateUrl: './team-results.component.html',
  styleUrls: ['./team-results.component.css']
})
export class TeamResultsComponent implements OnInit {

  history: number = 12;
  team?: ITeam;
  games?: IGame[];

  constructor(
    private nbaService: NbaService,
    private gameService: GameService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    var teamId = Number.parseInt(this.route.snapshot.paramMap.get('teamId')!);

    this.nbaService.getTeam(teamId).subscribe((team: ITeam | null) => {

      if (!team) {
        this.router.navigate(['/']);
      }

      this.team = team!;

      this.gameService.getGames(teamId, 12).subscribe((games: IGame[]) => {
        this.games = games;
      })
    });
  }
}