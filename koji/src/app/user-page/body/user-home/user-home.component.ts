import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupApiService } from 'src/app/public/api-services/group-api.service';
import { UserApiService } from 'src/app/public/api-services/user-api.service';
import { BackendAPIService } from 'src/app/public/backendAPI/backend-api.service';
import { UserControllerService } from 'src/app/public/controller/user-controller.service';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
import { UserInformationService } from 'src/app/public/information/user-information.service';
import { UserPageInformationService } from 'src/app/public/information/user-page-information.service';
import { GroupModel } from 'src/app/public/models/group-model';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  userGroups:Map<String,GroupModel>=new Map();
  constructor(private router:Router,
              private userPageController:UserPageControllerService,
              public userInformation:UserInformationService,
              public userPageInformation:UserPageInformationService,
              private userApi: UserApiService,
              private groupApi:GroupApiService) { }

  ngOnInit(): void {
    if(localStorage.getItem("token")){
      this.userInformation.events = new Map();
      this.userApi.getDetails()
      .subscribe(
        (data:any) => {   
          this.userInformation.userData={
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            username: data.username,
            groups: data.groups
          };

          data.groups.forEach((groupId:String) => {
            this.groupApi.getDetailsById(groupId).subscribe(
              (response:any) => {
                this.userInformation.groups.set(response.id,{
                  name:response.name,
                  bio:response.bio,
                  owner:response.owner,
                  events:response.events,
                  users:response.users,
                  link:response.link,
                  id:response.id
                });
              }
            )
          });
        },
        (error:Error) => console.log(error)
      );
    }
    else this.navigate("login");
  }
  selectGroup(group:GroupModel){
    this.userPageController.setSelectedGroup(group);
    this.router.navigate(["/user/group"]);
  }
  navigate(endPoint:string){
    this.router.navigate([endPoint]);
  }
}
