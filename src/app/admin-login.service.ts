import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  constructor(private http:HttpClient) { }

  sendDetails(val:any){
    return this.http.post("http://localhost:8081/user/login",val,{responseType: 'text' as 'json'});

  }
}
