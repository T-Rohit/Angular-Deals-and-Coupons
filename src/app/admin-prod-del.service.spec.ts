import { TestBed } from '@angular/core/testing';

import { AdminProdDelService } from './admin-prod-del.service';

describe('AdminProdDelService', () => {
  let service: AdminProdDelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProdDelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
