import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITeam } from '../data/team';

@Component({
  selector: 'app-team-header',
  templateUrl: './team-header.component.html',
  styleUrls: ['./team-header.component.css']
})
export class TeamHeaderComponent {

  @Input() team?: ITeam;
  @Output() closed: EventEmitter<ITeam> = new EventEmitter<ITeam>();

  public onClosed(): void {
    if (this.team && this.closed.observed) {
      this.closed.emit(this.team!);
    }
  }
}
