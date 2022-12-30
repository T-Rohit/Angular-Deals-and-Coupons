import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminProdDelService } from '../admin-prod-del.service';
import { CouponService } from '../coupon.service';

@Component({
  selector: 'app-admin-coupon-del',
  templateUrl: './admin-coupon-del.component.html',
  styleUrls: ['./admin-coupon-del.component.css']
})
export class AdminCouponDelComponent implements OnInit {

  Coupons:any;
  val:any;
  constructor(private service:CouponService,
              private http:HttpClient) { }

  ngOnInit(): void {
    this.Coupons=this.service.getCoupons().subscribe((data)=>this.Coupons=data);
  }

  delCoupon(val:any){
    console.warn(val);
    this.http.delete('http://localhost:8085/product/deleteProducts/'+val).subscribe();
    alert("Product Deleted");
  }
}
