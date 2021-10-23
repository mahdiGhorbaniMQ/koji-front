import { Component, OnInit } from '@angular/core';
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
  constructor(private userPageController:UserPageControllerService,
              public userPageInformation:UserPageInformationService,
              private userController:UserControllerService) { }
  ngOnInit(): void {
    this.userData=this.userController.getUserData();
  }

}
