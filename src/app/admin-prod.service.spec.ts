import { TestBed } from '@angular/core/testing';

import { AdminProdService } from './admin-prod.service';

describe('AdminProdService', () => {
  let service: AdminProdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
