import { Component, OnInit } from '@angular/core';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'app-admin-coupon-dash',
  templateUrl: './admin-coupon-dash.component.html',
  styleUrls: ['./admin-coupon-dash.component.css']
})
export class AdminCouponDashComponent implements OnInit {

  Coupons:any;
  constructor(private service:CouponService) { }

  ngOnInit(): void {

    this.Coupons=this.service.getCoupons().subscribe((data: any)=>this.Coupons=data);
  }

}
