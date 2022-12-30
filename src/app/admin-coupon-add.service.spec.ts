import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminCouponAddService } from './admin-coupon-add.service';
import { AppRoutingModule } from './app-routing.module';

describe('AdminCouponAddService', () => {
  let service: AdminCouponAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    imports:[
      HttpClientTestingModule,
    ]
    service = TestBed.inject(AdminCouponAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
