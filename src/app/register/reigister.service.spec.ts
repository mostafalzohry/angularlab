import { TestBed } from '@angular/core/testing';

import { RegisterService } from './reigister.service';

describe('ReigisterService', () => {
  let service: RegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
