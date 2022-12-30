import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminCouponDelComponent } from './admin-coupon-del.component';

describe('AdminCouponDelComponent', () => {
  let component: AdminCouponDelComponent;
  let fixture: ComponentFixture<AdminCouponDelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ AdminCouponDelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCouponDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AdminCouponDelComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
