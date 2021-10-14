import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPageControllerService } from 'src/app/user-page/public/controller/user-page-controller.service';
import { UserInofrmationControllerService } from '../controller/user-inofrmation-controller.service';
import { GroupModel } from '../model/group-model';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  userGroups:GroupModel[]=[];
  constructor(private userController:UserInofrmationControllerService,
              private router:Router,
              private userPageController:UserPageControllerService) { }

  ngOnInit(): void {
    this.userGroups = this.userController.getUserGroups();
  }
  selectGroup(group:GroupModel){
    this.userPageController.setSelectedGroup(group);
    this.router.navigate(["/user/group"]);
  }
}
