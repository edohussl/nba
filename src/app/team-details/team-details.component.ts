import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Results } from '../data/results';
import { ITeam } from '../data/team';
import { GameService } from '../game.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  @Input() history: number;
  @Input() team?: ITeam;
  results?: Results;
  @Output() closed: EventEmitter<ITeam> = new EventEmitter<ITeam>();

  constructor(private gameService: GameService) {
    this.history = 12;
  }

  ngOnInit(): void {
    if (this.team) {
      this.gameService.getResults(this.team!.id, this.history).subscribe((results: Results) => {
        this.results = results;
      });
    }
  }

  public onClosed(team: ITeam): void {
    if (this.team && this.closed.observed) {
      this.closed.emit(team);
    }
  }
}
