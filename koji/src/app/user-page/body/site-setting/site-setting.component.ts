import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
import { UserPageInformationService } from 'src/app/public/information/user-page-information.service';

@Component({
  selector: 'app-site-setting',
  templateUrl: './site-setting.component.html',
  styleUrls: ['./site-setting.component.scss']
})
export class SiteSettingComponent implements OnInit {

  themeType!:FormControl;
  siteTheme!:string;
  constructor(private usrePageController:UserPageControllerService,
              private router:Router,
              public userPageInformation:UserPageInformationService) { }
  ngOnInit(): void {
    this.siteTheme = localStorage.getItem("theme")? localStorage.getItem("theme")!: "defult";
    this.themeType = new FormControl(this.siteTheme, [
      Validators.required,
    ]);
    this.themeType.setValue(this.siteTheme);
  }

  changeTheme(){
    // if(this.siteTheme != this.themeType.value){
      this.siteTheme = this.themeType.value;
      localStorage.setItem("theme", this.siteTheme);
      this.usrePageController.setSiteTheme();
    // }
  }

  back(){
    this.usrePageController.setSelectedGroup(undefined);
    this.router.navigate(["/user/home"]);
  }

}
