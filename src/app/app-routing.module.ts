import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamResultsComponent } from './team-results/team-results.component';
import { TeamGuard } from './team.guard';

const routes: Routes = [
  { path: '', component: TeamListComponent },
  { path: 'results/:teamId', component: TeamResultsComponent, canActivate: [TeamGuard] },
  { path: '**', component: TeamListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
