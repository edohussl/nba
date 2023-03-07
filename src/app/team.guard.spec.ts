import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TeamGuard } from './team.guard';

describe('TeamGuard', () => {
  let guard: TeamGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule]
    });    guard = TestBed.inject(TeamGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
