import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display:any;
  title = 'DC';
  constructor(private http:HttpClient) { }

  checkLogin(){
    this.http.get('http://localhost:8081/user/findAllUsers').subscribe(data=>{
      console.warn(data);
      if(data==="No user"){
        this.display=true;
      }
      else{
        this.display=false;
      }
    })
  }
  
}
