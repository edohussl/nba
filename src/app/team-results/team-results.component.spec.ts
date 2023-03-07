import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TeamResultsComponent } from './team-results.component';

describe('TeamResultsComponent', () => {
  let component: TeamResultsComponent;
  let fixture: ComponentFixture<TeamResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ TeamResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
