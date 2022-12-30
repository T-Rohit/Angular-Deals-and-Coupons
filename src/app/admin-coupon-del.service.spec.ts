import { TestBed } from '@angular/core/testing';

import { AdminCouponDelService } from './admin-coupon-del.service';

describe('AdminCouponDelService', () => {
  let service: AdminCouponDelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminCouponDelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
