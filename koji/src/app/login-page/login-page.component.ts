import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendAPIService } from 'src/app/public/backendAPI/backend-api.service';
import { UserControllerService } from 'src/app/public/controller/user-controller.service';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
import { LoginApiService } from '../public/api-services/login-api.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  signUpForm!: FormGroup;
  firstName!:FormControl;
  lastName!:FormControl;
  email!:FormControl;
  usernameU!:FormControl;
  passwordU!:FormControl;
  signUpData={
    firstName:"",
    lastName:"",
    email:"",
    username:"",
    password:""
  }

  signInForm!: FormGroup;
  usernameI!:FormControl;
  passwordI!:FormControl;
  signInData={
    username:"",
    password:""
  }

  isLoadingU:boolean=false;
  isLoadingI:boolean=false;

  signUpErr:boolean=false;
  signUpErrContent:string="";

  signInErr:boolean=false;
  signInErrContent:string="";

  constructor(private builder: FormBuilder,
              private router:Router,
              private loginApi:LoginApiService) { }

  ngOnInit(): void {
    this.firstName= new FormControl(this.signUpData.firstName, [
      Validators.minLength(3),
      Validators.required,
    ]);
    this.lastName= new FormControl(this.signUpData.lastName, [
      Validators.minLength(3),
      Validators.required,
    ]);
    this.email= new FormControl(this.signUpData.email, [
      Validators.email,
      Validators.required,
    ]);
    this.usernameU= new FormControl(this.signUpData.username, [
      Validators.minLength(4),
      Validators.required,
    ]);
    this.passwordU= new FormControl(this.signUpData.password, [
      Validators.minLength(6),
      Validators.required,
    ]);
    this.signUpForm = this.builder.group({  
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      username: this.usernameU, 
      password: this.passwordU
    });

    this.usernameI= new FormControl(this.signInData.username, [
      Validators.minLength(4),
      Validators.required,
    ]),
    this.passwordI= new FormControl(this.signInData.password, [
      Validators.minLength(6),
      Validators.required,
    ])
    this.signInForm = this.builder.group({  
      username: this.usernameI,
      password: this.passwordI
    }); 
  }
  navigate(endpoint:string){
    this.router.navigate(["/"+endpoint]);
  }
  signUp(){
    this.isLoadingU=true;
    this.signUpErr=false;
    this.signUpErrContent="";

    var userData = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      email: this.email.value,
      username: this.usernameU.value,
      password: this.passwordU.value
    }
    this.loginApi.signup(userData)
    .subscribe(
      (response:any) => {
        this.isLoadingU=false;
        var signinData= {
          username: this.usernameU.value,
          password: this.passwordU.value
        }
        this.loginApi.signin(signinData).subscribe(
          (response:any)=>{
            localStorage.setItem("token",response.token);
            localStorage.setItem("username",response.username);
            this.router.navigate(["/user"]);
          },
          (error:any)=>{ 
            this.signUpErr=true;
            if(error.status==0)
              this.signUpErrContent="مشکل در برقراری ارتباط با سرور";
          }
        )
      },
      (error:any) => {
        this.isLoadingU=false;
        this.signUpErr=true;
        if(error.status==0)
          this.signUpErrContent="مشکل در برقراری ارتباط با سرور";
        else if(error.status==400)
          this.signUpErrContent="این ایمیل قبلا استفاده شده است.";
      }
    )
  }
  signIn(){
    this.isLoadingI=true;
    this.signInErr=false;
    this.signInErrContent="";
    var userData = {
      username: this.usernameI.value,
      password: this.passwordI.value
    }
    this.loginApi.signin(userData)
    .subscribe(
      (response:any) => {
        this.isLoadingI=false;
        localStorage.setItem("token",response.token);
        localStorage.setItem("username",response.username);
        this.router.navigate(["/user"]);
      },
      (error:any) => {
        console.log(error);
        this.signInErr=true;
        this.isLoadingI=false;
        if(error.status==0)
          this.signInErrContent="مشکل در برقراری ارتباط با سرور";
        else if(error.status==400)
          this.signInErrContent="ایمیل یا پسورد اشتباه است.";
      }
    )
  }
}
