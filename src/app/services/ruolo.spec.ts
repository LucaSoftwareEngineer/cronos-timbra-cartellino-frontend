import { TestBed } from '@angular/core/testing';

import { Ruolo } from './ruolo';

describe('Ruolo', () => {
  let service: Ruolo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ruolo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
