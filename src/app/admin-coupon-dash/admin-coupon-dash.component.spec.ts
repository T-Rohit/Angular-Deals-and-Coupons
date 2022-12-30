import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AdminCouponDashComponent } from './admin-coupon-dash.component';

describe('AdminCouponDashComponent', () => {
  let component: AdminCouponDashComponent;
  let fixture: ComponentFixture<AdminCouponDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ AdminCouponDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCouponDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AdminCouponDashComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
