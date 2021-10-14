import { Injectable } from '@angular/core';
import { GroupModel } from '../../body/user-home/model/group-model';
import { UserPageInformationService } from '../information/user-page-information.service';

@Injectable({
  providedIn: 'root'
})
export class UserPageControllerService {

  constructor(private information:UserPageInformationService) { }
  setSelectedGroup(group: GroupModel | undefined){
    this.information.selectedGroup=group;
  }
  getSelectedGroup(): GroupModel | undefined{
    return this.information.selectedGroup;
  }
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
  magnifyNavBar(){
    this.information.navBarStyle["width"]="180px"
  }
  unMagnifyNavBar(){
    this.information.navBarStyle["width"]=undefined;
  }
  showBody(){
    this.information.bodyStyle={}
  }
  switchToBody(){
    if(window.innerWidth<=800){
      this.showBody();
      this.hideNavBar();
      this.unMagnifyNavBar();
    }
  }
  switchToNavBar(){
    if(window.innerWidth<=800){
      this.showNavBar();
      this.magnifyNavBar();
      this.hideBody();
    }
  }
  switchToBothOfBodyAndNavBar(){
    this.showBody();
    this.showNavBar();
    this.unMagnifyNavBar();
  }
}
