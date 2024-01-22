import { TestBed } from '@angular/core/testing';

import { AnotherAuthGuard } from './another-auth.guard';

describe('AnotherAuthGuard', () => {
  let guard: AnotherAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AnotherAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
