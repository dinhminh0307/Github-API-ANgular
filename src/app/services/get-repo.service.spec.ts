import { TestBed } from '@angular/core/testing';

import { GetRepoService } from './get-repo.service';

describe('GetRepoService', () => {
  let service: GetRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
