import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistrationService } from './registration.service';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  t:any;
  constructor(private http:HttpClient,private service:RegistrationService) { }

  getCoupons(){
    this.t=this.service.token;
    let tokenStr='Bearer '+this.t;
    const headers=new HttpHeaders().set("Authorization",tokenStr);
    return  this.http.get("http://localhost:8081/user/GetCoupons",{headers});
  }
}
