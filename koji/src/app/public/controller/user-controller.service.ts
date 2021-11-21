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
  
  // getUserGroups():GroupModel[]{
  //   return this.userInformation.groups;
  // }
  fillUserData(tocken:string){

    this.backendAPI.getUserData(tocken)
    .subscribe(
      (data: UserModel) => {
        // const data = response.json();
        console.log(data);
        this.userInformation.userData=data;
        this.router.navigate(["/user"]);
      },
      (error:Error) => console.log(error)
    )
  }
}
