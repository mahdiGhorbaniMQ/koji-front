import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GroupApiService } from 'src/app/public/api-services/group-api.service';
import { BackendAPIService } from 'src/app/public/backendAPI/backend-api.service';
import { UserControllerService } from 'src/app/public/controller/user-controller.service';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
import { UserInformationService } from 'src/app/public/information/user-information.service';
import { UserPageInformationService } from 'src/app/public/information/user-page-information.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent implements OnInit {

  createGroupForm!: FormGroup;
  groupName!:FormControl;
  groupBio!:FormControl;
  groupType!:FormControl;
  createGroupData={
    groupName:"",
    groupBio:"",
    groupType:"private"
  }

  createSuccess:boolean=false;
  createError:boolean=false;

  isLoading:boolean=false;
  
  constructor(private usrePageController:UserPageControllerService,
              public userPageInformation:UserPageInformationService,
              private router:Router,
              private builder: FormBuilder,
              private groupApi:GroupApiService,
              private userInformation: UserInformationService,
              private userController: UserControllerService) { }

  ngOnInit(): void {
    this.groupName= new FormControl(this.createGroupData.groupName, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]);
    this.groupBio= new FormControl(this.createGroupData.groupBio, [
      Validators.maxLength(40)
    ]);
    this.groupType= new FormControl(this.createGroupData.groupType, [
      Validators.required,
    ]);
    this.createGroupForm = this.builder.group({  
      groupName: this.groupName,  
      groupBio: this.groupBio, 
      groupType: this.groupType
    });
  }

  back(){
    this.usrePageController.setSelectedGroup(undefined);
    this.router.navigate(["user/home"]);
  }
  create(){
    this.isLoading = true;
    var groupData = {
      name: this.groupName.value,
      bio: this.groupBio.value,
      users: []
    }
    this.groupApi.create(groupData).subscribe(
      (Response:any)=>{
        this.isLoading = false;
        this.createSuccess = true;
        this.createError = false;
        setTimeout(() => {
          this.goHome();
        }, 1500);
      },
      (error:any)=>{
        this.isLoading = false;
        this.createSuccess = false;
        this.createError = true;
      }
    )
  }
  goHome(){
    this.router.navigate(["/user/home"]);
  }
}
