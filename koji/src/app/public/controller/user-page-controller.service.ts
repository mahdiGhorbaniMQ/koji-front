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
  setToken(token:string){

  }
  getToken():string{
    return "token"
  }
  getPageSize(){
    this.information.pageWidth=window.innerWidth;
    this.information.pageHeight=window.innerHeight;
  }
  setElementsHeight(){
      this.information.bodyStyle["height"]=this.information.pageHeight-75+"px";
      this.information.navBarStyle["height"]=this.information.pageHeight-75+"px";
  }
  hideNavBar(){
    this.information.navBarStyle["width"]="50px";
    this.information.bodyStyle["width"]=this.information.pageWidth-50+"px";
    this.information.bodyStyle["left"]="50px";
    this.information.showMenu=false;
  }
  showNavBar(){
    if(window.innerWidth<800){
        this.information.navBarStyle["width"]=this.information.pageWidth+"px";
        this.information.bodyStyle["left"]=this.information.pageWidth+"px";
        this.information.showMenu=true;
    }
    else{
        this.information.navBarStyle["width"]="250px";
        this.information.bodyStyle["width"]=this.information.pageWidth-250+"px";
        this.information.bodyStyle["left"]="250px";
        this.information.showMenu=false;
    }
  }
}
