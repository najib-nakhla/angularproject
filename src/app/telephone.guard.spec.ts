import { TestBed } from '@angular/core/testing';

import { TelephoneGuard } from './telephone.guard';

describe('TelephoneGuard', () => {
  let guard: TelephoneGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TelephoneGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
