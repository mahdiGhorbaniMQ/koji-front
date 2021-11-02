import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
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

  places:string[]=[];
  dates:string[]=[];
  constructor(private userPageController:UserPageControllerService,
              private eventController:EventControllerService,
              private router:Router) { }

  ngOnInit(): void {
    this.eventController.setEventData()
    this.selectedEvent=this.userPageController.getSelectedEvent()!;
  }
  addPlace(){
    if(this.placeInput!=""){
      this.places.push(this.placeInput);
      this.placeInput="";
    }
  }
  deletePlace(index:number){
    this.places.splice(index,1)
  }
  addDate(){
    if(this.dateInput!=""){
      this.dates.push(this.dateInput);
      this.dateInput="";
    }
  }
  deleteDate(index:number){
    this.dates.splice(index,1)
  }
  setUserConditions(){
    this.selectedEvent.conditions?.set("شما",{placeName:this.places,localDate:this.dates,state:this.state})
  }
  back(){
    this.router.navigate(["user/group"])
  }
}
