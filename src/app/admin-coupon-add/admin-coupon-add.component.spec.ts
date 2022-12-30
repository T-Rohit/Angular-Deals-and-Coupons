import {HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from 'express';
import { AppRoutingModule } from '../app-routing.module';

import { AdminCouponAddComponent } from './admin-coupon-add.component';

describe('AdminCouponAddComponent', () => {
  let component: AdminCouponAddComponent;
  let fixture: ComponentFixture<AdminCouponAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        RouterTestingModule,
        HttpClientTestingModule,
        AppRoutingModule,
        ReactiveFormsModule
      ],
      declarations: [ AdminCouponAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCouponAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AdminCouponAddComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
