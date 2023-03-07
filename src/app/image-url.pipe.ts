import { Pipe, PipeTransform } from '@angular/core';
import { ITeam } from './data/team';

@Pipe({
  name: 'imageUrl'
})
export class ImageUrlPipe implements PipeTransform {

  transform(team: ITeam): string {
    return `https://interstate21.com/nba-logos/${team.abbreviation}.png`;
  }
}
