import { Injectable } from '@angular/core';
import { EventModel } from '../models/event-model';
import { GroupModel } from '../models/group-model';
import { StyleModel } from '../models/style-model';

@Injectable({
  providedIn: 'root'
})
export class UserPageInformationService {
  selectedGroup:GroupModel | undefined;
  selectedEvent:EventModel | undefined;
  emptyEvent:EventModel= {title:"",desceriptions:"",creator:"",status:"",locationLink:""};
  emptygroup:GroupModel={name:"",creator:"",link:"",users:[],events:[]}
  headerStyle:StyleModel={};
  bodyStyle:StyleModel={};
  navBarStyle:StyleModel={};
  pageWidth!:number;
  pageHeight!:number;
  showMenu:boolean=false;
  theme!:string;
  constructor() {
    this.theme = localStorage.getItem("theme")? localStorage.getItem("theme")!: "defult";
    this.headerStyle={};
    this.bodyStyle={};
    this.navBarStyle={};
  }
}
