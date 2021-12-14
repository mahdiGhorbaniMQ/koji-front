import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BackendAPIService } from 'src/app/public/backendAPI/backend-api.service';
import { UserApiService } from '../api-services/user-api.service';
import { UserInformationService } from '../information/user-information.service';
import { GroupModel } from '../models/group-model';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  constructor(private backendAPI:BackendAPIService,
              private userInformation:UserInformationService,
              private router:Router,
              private userApi:UserApiService) { }
  
  getUserGroups():any{
    return this.userInformation.groups;
  }
  // fillUserData(email:string){


    // this.backendAPI.getUserData(email)
    // .subscribe(
      // (data:any) => {        
      //   this.userInformation.userData.groups=[];
      //   this.userInformation.userData.name = data.name;
      //   this.userInformation.userData.email = data.email;
      //   data.teams.forEach((team:any) => {
      //     var group:GroupModel = {
      //       name: team.name,
      //       link: team.invite_id,
      //       bio: team.creator.bio,
      //       creator: team.email,
      //       id: team.id,
      //       users: []
      //     }
      //     team.users.forEach((item:any) => {
      //       var user = {name:item.name,email:item.email};
      //       group.users.push(user);
      //     });
      //     this.userInformation.userData.groups.push(group);
      //   });
      // },
      // (error:Error) => console.log(error)
  //   )
  // }
  // createUserAcount(email:string,name:string,password:string){
  //   this.backendAPI.createAcount(email,name,password)
  //   .subscribe(
  //     (data:any) => {

  //       this.router.navigate(["/user/home"]);
  //     },
  //     (error:Error) => console.log(error)
  //   )
  // }
  deleteUserAccount(){
    this.backendAPI.deleteAcount(localStorage.getItem("email")!).subscribe(
      (data:any)=>{
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        this.router.navigate(["/"]);
      },
      (error:any)=>{console.log(error)}
      )
  }
  updateUserAccount(firstName:string,lastName:string){
    var userData = {
      firstName: firstName,
      lastName: lastName
    }
    this.userApi.update(userData).subscribe(
      (response:any)=>{
        this.userInformation.userData.firstName="";
        this.router.navigate(["/user/home"]);
      },
      (err:any)=>{
        console.log(err)
      }
    )
  }
  getUserData():UserModel{
    return this.userInformation.userData;
  }
}
