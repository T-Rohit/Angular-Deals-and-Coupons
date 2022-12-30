import { Component, OnInit } from '@angular/core';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  Coupons:any
  constructor(private service:CouponService) { }

  ngOnInit(): void {

    this.Coupons=this.service.getCoupons().subscribe((data: any)=>{
      this.Coupons=data;
      console.warn(this.Coupons);
    });
  }
  alertmsg(){
    alert("Code Copied");
  }

  
}
