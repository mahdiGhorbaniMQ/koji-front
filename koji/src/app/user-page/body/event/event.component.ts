import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
import { UserInformationService } from 'src/app/public/information/user-information.service';
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

  places:{title:string,selected?:boolean}[]=[];
  dates:{title:string,selected?:boolean}[]=[];

  finalCondition!:ConditionsModel;
  
  constructor(private userPageController:UserPageControllerService,
              private eventController:EventControllerService,
              private router:Router,
              private userInformation:UserInformationService) { }

  ngOnInit(): void {
    this.eventController.setEventData()
    this.selectedEvent=this.userPageController.getSelectedEvent()!;

    this.setEventPlaces();
    this.setEventDates();
    this.setFinalCondition();
  }
  setEventPlaces(){
    this.selectedEvent.conditions?.forEach(condition => {
      if (condition.user=="creator" && condition.condition.placeName)
        this.places = condition.condition.placeName;
    });
    console.log(this.places)
  }
  setEventDates(){
    this.selectedEvent.conditions?.forEach(condition => {
      if (condition.user=="creator" && condition.condition.localDate)
        this.dates = condition.condition.localDate;
    });
  }
  setFinalCondition(){
    this.selectedEvent.conditions?.forEach(condition => {
      if (condition.user=="final" && condition.condition.placeName)
      this.finalCondition = condition.condition;
    });
  }
  changeDateItemState(index:number){
    this.dates[index].selected=!this.dates[index].selected;
  }
  changePlaceItemState(index:number){
    this.places[index].selected=!this.places[index].selected;
  }
  setUserConditions(){
    this.selectedEvent.conditions?.push({user:this.userInformation.userData.name,condition:{placeName:this.places,localDate:this.dates,state:this.state}})
  }
  back(){
    this.router.navigate(["user/group"])
  }
  navigate(endpoint:string){
    this.router.navigate([endpoint]);
  }
}
