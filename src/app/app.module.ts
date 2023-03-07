import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { TeamHeaderComponent } from './team-header/team-header.component';
import { ImageUrlPipe } from './image-url.pipe';
import { TeamResultsComponent } from './team-results/team-results.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    TeamDetailsComponent,
    TeamHeaderComponent,
    ImageUrlPipe,
    TeamResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
