import { TestBed } from '@angular/core/testing';

import { NgTrcLibService } from './ng-trc-lib.service';

describe('NgTrcLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgTrcLibService = TestBed.get(NgTrcLibService);
    expect(service).toBeTruthy();
  });
});
