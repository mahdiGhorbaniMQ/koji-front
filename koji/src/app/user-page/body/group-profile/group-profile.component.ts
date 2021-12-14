import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendAPIService } from 'src/app/public/backendAPI/backend-api.service';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
import { UserInformationService } from 'src/app/public/information/user-information.service';
import { UserPageInformationService } from 'src/app/public/information/user-page-information.service';
import { GroupModel } from 'src/app/public/models/group-model';

@Component({
  selector: 'app-group-profile',
  templateUrl: './group-profile.component.html',
  styleUrls: ['./group-profile.component.scss']
})
export class GroupProfileComponent implements OnInit {

  selectedGroup!:GroupModel;
  userEmail = localStorage.getItem("email")!;
  userName!:string;
  userIsAddmin:boolean = false;

  constructor(private usrePageController:UserPageControllerService,
              private router:Router,
              private backendAPI:BackendAPIService,
              private userInformation:UserInformationService,
              public userPageInformation:UserPageInformationService) { }

  ngOnInit(): void {
    this.selectedGroup=this.usrePageController.getSelectedGroup()!;
    this.userName = this.userInformation.userData.firstName;
    console.log(this.selectedGroup)
    if(this.selectedGroup.owner==this.userEmail){
      this.userIsAddmin = true;
    }
  }

  back(){
    this.usrePageController.setSelectedGroup(undefined);
    this.router.navigate(["/user/home"]);
  }

  deleteGroup(){
    this.backendAPI.deleteGroup(this.selectedGroup.id).subscribe(
      (respons:any)=>{
        this.userInformation.userData.firstName="";
        this.router.navigate(["/user/home"]);
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
}
