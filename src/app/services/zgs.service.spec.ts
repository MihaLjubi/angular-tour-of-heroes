import { TestBed } from '@angular/core/testing';

import { ZgsService } from './zgs.service';

describe('ZgsService', () => {
  let service: ZgsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZgsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
