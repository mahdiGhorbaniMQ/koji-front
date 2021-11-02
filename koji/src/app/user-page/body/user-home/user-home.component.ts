import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserControllerService } from 'src/app/public/controller/user-controller.service';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
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
              private userPageController:UserPageControllerService) { }

  ngOnInit(): void {
    this.userGroups = this.userController.getUserGroups();
  }
  selectGroup(group:GroupModel){
    this.userPageController.setSelectedGroup(group);
    this.router.navigate(["/user/group"]);
  }

}
