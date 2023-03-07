import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDetailsComponent } from './team-details.component';

describe('TeamDetailsComponent', () => {
  let component: TeamDetailsComponent;
  let fixture: ComponentFixture<TeamDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      declarations: [ TeamDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
