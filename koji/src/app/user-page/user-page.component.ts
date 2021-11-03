import { Component, OnInit } from '@angular/core';
import { UserPageControllerService } from '../public/controller/user-page-controller.service';
import { UserPageInformationService } from '../public/information/user-page-information.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  navBarControlleContent:string="<";

  constructor(private userPageController:UserPageControllerService,
              public information:UserPageInformationService) { }

  ngOnInit(): void {
    this.userPageController.getPageSize();
    this.checkWindowSize()
  }
  checkWindowSize(){
    this.userPageController.setElementsHeight();
    if(window.innerWidth<=800){
      this.userPageController.hideNavBar();
    }
    else{
      this.userPageController.showNavBar();
    }
  }
  onResize(){
    this.userPageController.getPageSize();
    this.checkWindowSize();
    this.navBarControlleContent="<";
  }
  changeNavBarState(){
    if(this.information.showMenu){
      this.userPageController.hideNavBar();
      this.navBarControlleContent="<";
    }
    else{
      this.userPageController.showNavBar();
      this.navBarControlleContent=">";
    }
  }
}
