import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
import { UserPageInformationService } from 'src/app/public/information/user-page-information.service';

@Component({
  selector: 'app-event-setting',
  templateUrl: './event-setting.component.html',
  styleUrls: ['./event-setting.component.scss']
})
export class EventSettingComponent implements OnInit {

  constructor(private usrePageController:UserPageControllerService,
              public userPageInformation:UserPageInformationService,
              private router:Router) { }
  ngOnInit(): void {
  }

  back(){
    this.usrePageController.setSelectedGroup(undefined);
    this.router.navigate(["user/group/event"]);
  }
}
