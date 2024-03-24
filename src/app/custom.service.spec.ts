import { TestBed } from '@angular/core/testing';

import { Custom } from './custom.service';

describe('JobService', () => {
  let service: Custom;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Custom);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
