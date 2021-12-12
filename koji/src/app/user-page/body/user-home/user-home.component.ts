import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  userGroups:GroupModel[]=[];
  constructor(private userController:UserControllerService,
              private router:Router,
              private userPageController:UserPageControllerService,
              private userInformation:UserInformationService,
              public userPageInformation:UserPageInformationService,
              private backendAPI:BackendAPIService) { }

  ngOnInit(): void {
    this.userGroups = this.userInformation.userData.groups;
    if(this.userInformation.userData.name=="")
    this.backendAPI.getUserData(localStorage.getItem("email")!)
    .subscribe(
      (data:any) => {        
        this.userInformation.userData.groups=[];
        this.userInformation.userData.name = data.name;
        this.userInformation.userData.email = data.email;
        data.teams.forEach((team:any) => {
          var group:GroupModel = {
            name: team.name,
            link: team.invite_id,
            bio: team.bio,
            creator: team.creator.email,
            id: team.id,
            users: []
          }
          team.users.forEach((item:any) => {
            var user = {name:item.name,email:item.email};
            group.users.push(user);
          });
          this.userInformation.userData.groups.push(group);
          this.userGroups = this.userInformation.userData.groups;
        });
      },
      (error:Error) => console.log(error)
    );
  }
  selectGroup(group:GroupModel){
    this.userPageController.setSelectedGroup(group);
    this.router.navigate(["/user/group"]);
  }
  navigate(endPoint:string){
    this.router.navigate([endPoint]);
  }
}
