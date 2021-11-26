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
        data.teams.forEach((team:any) => {
          this.userInformation.userData.groups.push({
            name: team.name,
            link: team.invite_id,
            bio: team.creator.bio,
            creator: team.creator.email,
            users:[]
          })
          this.userGroups = this.userInformation.userData.groups;
        });
      },
      (error:Error) => console.log(error)
    )
  }
  selectGroup(group:GroupModel){
    this.userPageController.setSelectedGroup(group);
    this.router.navigate(["/user/group"]);
  }

}
