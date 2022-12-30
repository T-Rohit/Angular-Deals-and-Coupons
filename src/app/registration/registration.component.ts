import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  loginForm: FormGroup;

  val:any;
  constructor(private fb:FormBuilder, private service:RegistrationService, private router: Router) { 
    this.loginForm = this.fb.group({
      'email':new FormControl('', [Validators.required, Validators.email]),
      'password':new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
  ngOnInit(){
  }
  Login(){
    alert("Logged in")
  }
  getLoginDets(val: any){
    
    let check=this.service.checkDetails(val);
    check.subscribe(data=>{
      console.warn(data);
      if(data==="Wrong Password"){
        alert("Wrong Password")
      }
      else if(data==="No such User")
      {
        alert("No such User")
      }
      else{

        let resp=this.service.sendDetails(val);
        alert("User Logged in");
        resp.subscribe(data=>{
        this.service.setToken(data);
        });
        this.router.navigate(['after-login']);
      }
    })
    
  }
  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

}