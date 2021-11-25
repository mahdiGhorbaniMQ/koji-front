import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';

@Component({
  selector: 'app-site-setting',
  templateUrl: './site-setting.component.html',
  styleUrls: ['./site-setting.component.scss']
})
export class SiteSettingComponent implements OnInit {

  constructor(private usrePageController:UserPageControllerService,
              private router:Router) { }
  ngOnInit(): void {}

  back(){
    this.usrePageController.setSelectedGroup(undefined);
    this.router.navigate(["/user/home"]);
  }

}
