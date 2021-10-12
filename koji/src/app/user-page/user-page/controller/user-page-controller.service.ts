import { Injectable } from '@angular/core';
import { StyleModel } from '../../public/models/style-model';
import { UserPageInformationService } from '../information/user-page-information.service';

@Injectable({
  providedIn: 'root'
})
export class UserPageControllerService {

  constructor(private information:UserPageInformationService) { }
  hideNavBar(){
    this.information.navBarStyle={
      "transform": "rotate(-15deg) translate(-400px,0)"
    }
  }
  showNavBar(){
    this.information.navBarStyle={}
  }
  hideBody(){
    this.information.bodyStyle={
      "transform": "rotate(15deg) translate(800px,0)"
    }
  }
  showBody(){
    this.information.bodyStyle={}
  }
  switchToBody(){
    if(window.innerWidth<=800){
      this.showBody();
      this.hideNavBar();
    }
  }
  switchToNavBar(){
    if(window.innerWidth<=800){
      this.showNavBar();
      this.hideBody();
    }
  }
  switchToBothOfBodyAndNavBar(){
    this.showBody();
    this.showNavBar();
  }
}
