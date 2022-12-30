import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminCouponAddService {

  constructor(private http:HttpClient) { }

  sendDetails(val:any){
    return this.http.post("http://localhost:8085/product/addProduct",val);
  }
}
