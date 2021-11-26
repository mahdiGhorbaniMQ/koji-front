import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserControllerService } from 'src/app/public/controller/user-controller.service';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
import { UserInformationService } from 'src/app/public/information/user-information.service';
import { UserPageInformationService } from 'src/app/public/information/user-page-information.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  updateForm!: FormGroup;
  name!:FormControl;
  email!:FormControl;
  updateData={
    name:"",
    email:""
  }

  isLoading:boolean=false;

  updateErr:boolean=false;
  updateErrContent:string="";

  constructor(private usrePageController:UserPageControllerService,
              private router:Router,
              private builder: FormBuilder,
              private userInformatiom: UserInformationService,
              private userController:UserControllerService,
              public userPageInformation:UserPageInformationService) { }
  ngOnInit(): void {
    this.name = new FormControl(this.updateData.name, [
      Validators.minLength(3),
      Validators.required,
    ]);
    this.email= new FormControl(this.updateData.email, [
      Validators.email,
      Validators.required,
    ]);

    this.updateForm = this.builder.group({  
      name: this.name,  
      email: this.email, 
    });
    this.name.setValue(this.userInformatiom.userData.name);
    this.email.setValue(this.userInformatiom.userData.email);
  }

  back(){
    this.usrePageController.setSelectedGroup(undefined);
    this.router.navigate(["/user/home"]);
  }
  update(){
    this.userController.updateUserAccount(this.name.value,this.email.value)
  }
}
