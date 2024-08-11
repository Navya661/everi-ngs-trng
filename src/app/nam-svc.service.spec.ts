import { TestBed } from '@angular/core/testing';

import { NamSvcService } from './nam-svc.service';

describe('NamSvcService', () => {
  let service: NamSvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NamSvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
