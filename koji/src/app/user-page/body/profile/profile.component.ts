import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserControllerService } from 'src/app/public/controller/user-controller.service';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
import { UserPageInformationService } from 'src/app/public/information/user-page-information.service';
import { UserModel } from 'src/app/public/models/user-model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userData!:UserModel;
  loginAlert:boolean = false;
  signOutAlert:boolean = false;
  deleteAlert:boolean = false;

  constructor(private usrePageController:UserPageControllerService,
              private router:Router,
              private userController:UserControllerService,
              public userPageInformation:UserPageInformationService) { }
  ngOnInit(): void {
    this.userData=this.userController.getUserData();
  }

  back(){
    this.usrePageController.setSelectedGroup(undefined);
    this.router.navigate(["/user/home"]);
  }

  login(){
    this.loginAlert = true;
    var f = (event:any) => {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      this.router.navigate(["/login"]);
    };
    setTimeout(() => {
      document.getElementById("login")?.addEventListener("dblclick",f);
    }, 300);
    setTimeout(() => {
      document.getElementById("login")?.removeEventListener("dblclick",f);
      this.loginAlert=false;
    }, 2500);
  }
  signOut(){
    var f = (event:any) => {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      this.router.navigate(["/"]);
    };
    this.signOutAlert = true;
    setTimeout(() => {
      document.getElementById("signOut")?.addEventListener("dblclick",f);
    }, 300);
    setTimeout(() => {
      document.getElementById("signOut")?.removeEventListener("dblclick",f);
      this.signOutAlert=false;
    }, 2500);
  }
  delete(){
    this.deleteAlert = true;
    var f = (event:any) => {
      this.userController.deleteUserAccount();
    };
    setTimeout(() => {
      document.getElementById("delete")?.addEventListener("dblclick",f);
    }, 300);
    setTimeout(() => {
      document.getElementById("delete")?.removeEventListener("dblclick",f);
      this.deleteAlert=false;
    }, 2500);
  }
  updateAcc(){
    this.router.navigate(["user/updateAcc"])
  }
}
