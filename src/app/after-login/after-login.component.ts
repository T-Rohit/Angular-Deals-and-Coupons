import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){

    this.http.get('http://localhost:8081/user/findAllUsers',{responseType: 'text' as 'json'}).subscribe(data=>{
      console.warn(data);
    let val=data;
    this.http.get('http://localhost:8081/user/logout').subscribe();
    this.router.navigate(['home']);
    });
    
  }
}
