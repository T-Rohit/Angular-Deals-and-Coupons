import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor(private http:HttpClient) { }
  getDeals(){
    return this.http.get("http://localhost:8085/product/GetDeals");
  }
}
