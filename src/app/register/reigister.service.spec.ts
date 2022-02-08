import { TestBed } from '@angular/core/testing';

import { ReigisterService } from './reigister.service';

describe('ReigisterService', () => {
  let service: ReigisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReigisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
