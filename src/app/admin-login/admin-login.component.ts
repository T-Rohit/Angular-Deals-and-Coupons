import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLoginService } from '../admin-login.service';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  AdminloginForm: FormGroup;

  val:any;
  constructor(private fb:FormBuilder, private service:AdminLoginService, private router: Router) { 
    this.AdminloginForm = this.fb.group({
      'email':new FormControl('', [Validators.required, Validators.email]),
      'password':new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
  ngOnInit(){
  }
  get email(){
    return this.AdminloginForm.get('email');
  }
  get password(){
    return this.AdminloginForm.get('password');
  }

  getLoginDets(val: any){
    
    console.log(val)
    let resp=this.service.sendDetails(val);
    resp.subscribe(data=>{

    if(data==="Admin logged in")
    {
      this.router.navigate(['after-admin-login']);
    }
    else if(data==="Wrong password"){
      alert("Wrong password");
    }
    else{
      alert("No such Admin");
    }
    });
    
  }
}
