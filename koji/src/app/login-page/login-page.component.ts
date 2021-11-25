import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendAPIService } from 'src/app/public/backendAPI/backend-api.service';
import { UserControllerService } from 'src/app/public/controller/user-controller.service';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';

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

  isLoadingU:boolean=false;
  isLoadingI:boolean=false;

  signUpErr:boolean=false;
  signUpErrContent:string="";

  signInErr:boolean=false;
  signInErrContent:string="";

  constructor(private builder: FormBuilder,
              private router:Router,
              private backendAPI:BackendAPIService,
              private userController:UserControllerService,
              private userPageController:UserPageControllerService,
              private http:HttpClient) { }

  ngOnInit(): void {
    this.nameU= new FormControl(this.signUpData.name, [
      Validators.minLength(3),
      Validators.required,
    ]);
    this.emailU= new FormControl(this.signUpData.email, [
      Validators.email,
      Validators.required,
    ]);
    this.passwordU= new FormControl(this.signUpData.password, [
      Validators.minLength(4),
      Validators.required,
    ]);
    this.signUpForm = this.builder.group({  
      name: this.nameU,  
      email: this.emailU, 
      password: this.passwordU
    });

    this.emailI= new FormControl(this.signInData.email, [
      Validators.email,
      Validators.required,
    ]),
    this.passwordI= new FormControl(this.signInData.password, [
      Validators.minLength(4),
      Validators.required,
    ])
    this.signInForm = this.builder.group({  
      email: this.emailI,
      password: this.passwordI
    }); 
  }
  signUp(){
    this.isLoadingU=true;
    this.signUpErr=false;
    this.signUpErrContent="";
    var name=this.nameU.value;
    var email=this.emailU.value;
    var password=this.passwordU.value;
    this.backendAPI.createAcount(email,name,password)
    .subscribe(
      (response:any) => {
        this.isLoadingU=false;
        var token;
        this.backendAPI.getUserTocken(email,password).subscribe(
          (response:any)=>{
            localStorage.setItem("token",response.token);
            localStorage.setItem("email",email);
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
    var email=this.emailI.value;
    var password=this.passwordI.value;
    this.backendAPI.getUserTocken(email,password)
    .subscribe(
      (response:any) => {
        this.isLoadingI=false;
        localStorage.setItem("token",response.token);
        localStorage.setItem("email",email);
        this.router.navigate(["/user"]);
      },
      (error:any) => {
        console.log(error);
        this.signInErr=true;
        this.isLoadingI=false;
        if(error.status==0)
          this.signUpErrContent="مشکل در برقراری ارتباط با سرور";
        else if(error.status==400)
          this.signInErrContent="ایمیل یا پسورد اشتباه است.";
      }
    )
  }
}
