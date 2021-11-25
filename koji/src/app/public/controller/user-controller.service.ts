import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BackendAPIService } from 'src/app/public/backendAPI/backend-api.service';
import { UserInformationService } from '../information/user-information.service';
import { GroupModel } from '../models/group-model';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  constructor(private backendAPI:BackendAPIService,
              private userInformation:UserInformationService,
              private router:Router) { }
  
  getUserGroups():GroupModel[]{
    return this.userInformation.userData.groups;
  }
  fillUserData(email:string){
    this.backendAPI.getUserData(email)
    .subscribe(
      (data:any) => {
        this.userInformation.userData.name = data.name;
        this.userInformation.userData.groups = [];
        data.teams.forEach((team:any) => {
          this.userInformation.userData.groups.push({
            name: team.name,
            link: team.invite_id,
            users:[]
          })
        });
        this.router.navigate(["/user/home"]);
      },
      (error:Error) => console.log(error)
    )
  }
  createUserAcount(email:string,name:string,password:string){
    this.backendAPI.createAcount(email,name,password)
    .subscribe(
      (data:any) => {

        this.router.navigate(["/user/home"]);
      },
      (error:Error) => console.log(error)
    )
  }

  getUserData():UserModel{
    return this.userInformation.userData;
  }
}
