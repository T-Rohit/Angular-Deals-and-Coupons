import { Component, OnInit } from '@angular/core';
import { AdminCouponAddService } from '../admin-coupon-add.service';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'app-admin-coupon-add',
  templateUrl: './admin-coupon-add.component.html',
  styleUrls: ['./admin-coupon-add.component.css']
})
export class AdminCouponAddComponent implements OnInit {

  constructor(private service:AdminCouponAddService) { }

  ngOnInit(): void {
  }

  getCoupons(val:any){

    let resp=this.service.sendDetails(val);
    resp.subscribe(result=>{
      alert("Coupon Added");
      
    });
  }
}
