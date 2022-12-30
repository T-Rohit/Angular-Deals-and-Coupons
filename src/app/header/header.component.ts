import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  home(){

    this.http.get('http://localhost:8081/user/findAllUsers',{responseType: 'text' as 'json'}).subscribe(data=>{
    let val=data;
    console.warn(val);
    if(val===null || val===undefined){
      this.router.navigate(['home']);
    }
    else{
      this.router.navigate(['home']);
    }
    });
    
  }
}
