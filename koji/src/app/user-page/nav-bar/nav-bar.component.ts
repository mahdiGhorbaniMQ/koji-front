import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserControllerService } from 'src/app/public/controller/user-controller.service';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
import { UserPageInformationService } from 'src/app/public/information/user-page-information.service';
import { UserModel } from 'src/app/public/models/user-model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  userData!:UserModel;
  // theme:string="light"
  constructor(private userPageController:UserPageControllerService,
              public userPageInformation:UserPageInformationService,
              private userController:UserControllerService,
              private router:Router) { }
  ngOnInit(): void {
    this.userData=this.userController.getUserData();
  }
  navigate(endpoint:string){
    if(this.userPageInformation.pageWidth<800){
      this.userPageController.hideNavBar();
    }
    this.router.navigate(["user/"+endpoint]);
  }
}
