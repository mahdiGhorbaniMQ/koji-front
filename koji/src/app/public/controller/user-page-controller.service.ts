import { Injectable } from '@angular/core';
import { GroupModel } from '../models/group-model';
import { UserPageInformationService } from '../information/user-page-information.service';
import { EventModel } from '../models/event-model';

@Injectable({
  providedIn: 'root'
})
export class UserPageControllerService {

  constructor(private information:UserPageInformationService) { }
  setSelectedGroup(group: GroupModel | undefined){
    this.information.selectedGroup=group;
  }
  getSelectedGroup(): GroupModel{
    if(this.information.selectedGroup)
      return this.information.selectedGroup;
    return this.information.emptygroup;
  }
  setSelectedEvent(event: EventModel | undefined){
    this.information.selectedEvent=event;
  }
  getSelectedEvent(): EventModel{
    if(this.information.selectedEvent)
      return this.information.selectedEvent;
    return this.information.emptyEvent;
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
  setToken(token:string){

  }
  getToken():string{
    return "token"
  }
}
