import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
import { UserPageInformationService } from 'src/app/public/information/user-page-information.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  constructor(private usrePageController:UserPageControllerService,
              private router:Router,
              public userPageInformation:UserPageInformationService) { }
  ngOnInit(): void {}

  back(){
      this.usrePageController.setSelectedGroup(undefined);
      this.router.navigate(["/user/home"]);
  }

}
