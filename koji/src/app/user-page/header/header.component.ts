import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
import { StyleModel } from 'src/app/public/models/style-model';
import { HeaderControllerService } from './controller/header-controller.service';
import { HeaderItemModel } from './model/header-item-model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerItems!:HeaderItemModel[];
  showDetailesBtnStyle!:StyleModel;
  showingNavBar:boolean=false;
  detailesBtnContent=">";
  constructor(private headerController:HeaderControllerService,
              private userPageController:UserPageControllerService,
              private router:Router) { }

  ngOnInit(): void {
    this.headerItems=this.headerController.getHeaderItems();
    this.checkWindowWidth();
  }
  checkWindowWidth(){
    if(window.innerWidth<=800){
      this.showDetailesBtnStyle={
        "transform":"rotate(0deg)"
      }
    }
    else{
      this.showDetailesBtnStyle={
        "transform":"rotate(-45deg) translate(-200px,0px)"
      };
    }
  }
  switching(){
    if(this.showingNavBar){
      this.showDetailesBtnStyle={
        "transform":"rotate(0deg)"
      }
      this.userPageController.switchToBody();
      this.detailesBtnContent=">";
    }else{
      this.showDetailesBtnStyle={
        "transform":"rotate(15deg) translate(200px,50px)"
      }
      this.userPageController.switchToNavBar()   
      this.detailesBtnContent="<";   
    }
    this.showingNavBar=!this.showingNavBar;
  }
  onResize(){
    this.showingNavBar=false;
    this.detailesBtnContent=">";
    this.checkWindowWidth();
  }
  routing(path:string){
    if(this.showingNavBar){
      this.switching();
    }
    this.userPageController.setSelectedGroup(undefined);
    this.router.navigate([path]);
  }
}
