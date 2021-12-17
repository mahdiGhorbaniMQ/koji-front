import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupApiService } from 'src/app/public/api-services/group-api.service';
import { UserApiService } from 'src/app/public/api-services/user-api.service';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
import { UserPageInformationService } from 'src/app/public/information/user-page-information.service';
import { GroupModel } from 'src/app/public/models/group-model';
import { UserProfileModel } from 'src/app/public/models/user-profile-model';

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.scss']
})
export class JoinGroupComponent implements OnInit {

  reqStatus:string="success";
  groupLink:string="";

  isJoining:boolean=false;
  joinSuccess:boolean=false;
  joinError:boolean=false;

  isSearching:boolean=false;
  searchSuccess:boolean=false;
  searchError:boolean=false;
  
  groupData!:GroupModel;
  userProfiles:UserProfileModel[]=[];

  constructor(private usrePageController:UserPageControllerService,
              private router:Router,
              public userPageInformation:UserPageInformationService,
              private groupApi:GroupApiService,
              private userApi:UserApiService) { }
  ngOnInit(): void {}

  back(){
    this.usrePageController.setSelectedGroup(undefined);
    this.router.navigate(["user/home"]);
  }
  join(){
    this.groupApi.addUser(this.groupData.id,localStorage.getItem("uesrname")!).subscribe(
      (response:any)=>{
        this.isJoining=false;
        this.joinSuccess=true;
        this.joinError=false;
        setTimeout(() => {
          this.goHome();
        }, 1500);
      },
      error=>{
        this.isJoining=false;
        this.joinSuccess=false;
        this.joinError=true;
      }
    )
  }
  search(){
    var groupId="";
    this.isSearching=true;
    groupId = this.groupLink.substring(4,this.groupLink.length-4);
    this.groupApi.getProfileById(groupId).subscribe(
      (response:any)=>{
        this.isSearching=false;
        this.searchSuccess=true;
        this.searchError=false;
        this.groupData = response;
        this.userProfiles = [];
        response.users.forEach((username:string) => {
          this.userApi.getProfileByUserName(username).subscribe(
            (profile:UserProfileModel)=>{
              this.userProfiles.push(profile);
            }
          )
        });
      },
      error=>{
        this.isSearching=false;
        this.searchSuccess=false;
        this.searchError=true;
      }
    )
  }
  goHome(){
    this.router.navigate(["/user/home"]);
  }
}
