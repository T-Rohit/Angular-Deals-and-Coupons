import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb:FormBuilder, private service:SignupService, private router: Router) { 
    this.signupForm = this.fb.group({
      'email':new FormControl('', [Validators.required, Validators.email]),
      'password':new FormControl('', [Validators.required, Validators.minLength(6)]),
      'gender':new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }
  signup(){
    alert("Account Created ")
  }

  getRegistrationValue(val: any){

    console.warn(val);
    this.service.sendDetails(val).subscribe(result=>{
      console.warn(result)
      alert("signup complete");
      this.router.navigate(['registration']);
    });
  }

  get email(){
    return this.signupForm.get('email');
  }
  get password(){
    return this.signupForm.get('password');
  }
  get gender(){
    return this.signupForm.get('gender');
  }

}
