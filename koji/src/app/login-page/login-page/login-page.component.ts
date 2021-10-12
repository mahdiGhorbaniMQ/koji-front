import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  signUpForm!: FormGroup;
  nameU!:FormControl;
  emailU!:FormControl;
  passwordU!:FormControl;
  signUpData={
    name:"",
    email:"",
    password:""
  }

  signInForm!: FormGroup;
  emailI!:FormControl;
  passwordI!:FormControl;
  signInData={
    email:"",
    password:""
  }

  constructor(private builder: FormBuilder,
              private router:Router) { }

  ngOnInit(): void {
    this.nameU= new FormControl(this.signUpData.name, [
      Validators.required,
    ]);
    this.emailU= new FormControl(this.signUpData.email, [
      Validators.required,
    ]),
    this.passwordU= new FormControl(this.signUpData.password, [
      Validators.required,
    ])
    this.signUpForm = this.builder.group({  
      name: this.nameU,  
      email: this.emailU, 
      password: this.passwordU
    });

    this.emailI= new FormControl(this.signInData.email, [
      Validators.required,
    ]),
    this.passwordI= new FormControl(this.signInData.password, [
      Validators.required,
    ])
    this.signInForm = this.builder.group({  
      email: this.emailI,
      password: this.passwordI
    }); 
  }
  signUp(){

  }
  signIn(){

  }
}
