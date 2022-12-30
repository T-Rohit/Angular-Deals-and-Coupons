import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  token:any;
  constructor(private http:HttpClient) { }

  sendDetails(val:any){
    return this.http.post("http://localhost:8081/user/token",val,{responseType: 'text' as 'json'});

  }
  checkDetails(val:any){
    return this.http.post("http://localhost:8081/user/login",val,{responseType: 'text' as 'json'});

  }

  setToken(res:any){
    this.token=res;
  }
}
 