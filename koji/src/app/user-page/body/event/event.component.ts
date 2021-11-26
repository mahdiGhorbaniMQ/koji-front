import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
import { UserPageInformationService } from 'src/app/public/information/user-page-information.service';
import { ConditionsModel } from 'src/app/public/models/conditions-model';
import { EventModel } from 'src/app/public/models/event-model';
import { EventControllerService } from './controller/event-controller.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  selectedEvent!:EventModel;
  selectedItem:string="user";

  conditionsData!:ConditionsModel;
  
  placeInput:string="";
  dateInput:string="";

  state:number=1;

  places:{title:string,selected:boolean}[]=[];
  dates:{title:string,selected:boolean}[]=[];
  datesMap!:Map<number,string>;
  placesMap!:Map<number,string>;
  userDates:string[]=[];
  userPlaces:string[]=[];
  constructor(private userPageController:UserPageControllerService,
              public userPageInformation:UserPageInformationService,
              private eventController:EventControllerService,
              private router:Router) { }

  ngOnInit(): void {
    this.eventController.setEventData()
    this.selectedEvent=this.userPageController.getSelectedEvent()!;
    this.places=this.selectedEvent.conditions?.get("سازنده")?.placeName!;
    this.dates=this.selectedEvent.conditions?.get("سازنده")?.localDate!;
  }
  changeDateItemState(index:number){
    // if(this.datesMap.has(index)){
    //   this.datesMap.delete(index);
    //   this.dates[index].selected=false;
    // }
    // else{
    //   this.datesMap.set(index,this.dates[index].title);
    //   this.dates[index].selected=true;
    // }
    this.dates[index].selected=!this.dates[index].selected;
  }
  changePlaceItemState(index:number){
    // if(this.placesMap.has(index)){
    //   this.placesMap.delete(index);
    //   this.places[index].selected=false;
    // }
    // else{
    //   this.placesMap.set(index,this.places[index].title);
    //   this.places[index].selected=true;
    // }
    this.places[index].selected=!this.places[index].selected;
  }
  setUserConditions(){
    // this.datesMap.forEach((value,key) => {
    //   this.userDates.push(value);
    // });
    // this.placesMap.forEach((value,key) => {
    //   this.userPlaces.push(value);
    // });
    this.selectedEvent.conditions?.set("شما",{placeName:this.places,localDate:this.dates,state:this.state})
  }
  back(){
    this.router.navigate(["user/group"])
  }
  navigate(endpoint:string){
    this.router.navigate([endpoint]);
  }
}
