import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendAPIService } from 'src/app/public/backendAPI/backend-api.service';
import { UserControllerService } from 'src/app/public/controller/user-controller.service';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  createEventForm!: FormGroup;
  eventTitle!:FormControl;
  eventDescriptions!:FormControl;
  eventPlaces!:FormControl;
  eventDates!:FormControl;
  placeInput!:FormControl;
  dateInput!:FormControl;
  createEventData={
    eventTitle:"",
    eventDescriptions:"",
    eventPlaces:new Array<string>(),
    eventDates:new Array<string>()
  }
  constructor(private usrePageController:UserPageControllerService,
              private router:Router,
              private builder: FormBuilder,
              private backendAPI:BackendAPIService,
              private userController:UserControllerService) { }
  ngOnInit(): void {
    this.eventTitle= new FormControl(this.createEventData.eventTitle, [
      Validators.required,
    ]);
    this.eventDescriptions= new FormControl(this.createEventData.eventDescriptions, [
      Validators.required,
    ]);
    this.eventPlaces= new FormControl(this.createEventData.eventPlaces, [
      Validators.required,
    ]);
    this.eventDates= new FormControl(this.createEventData.eventDates, [
      Validators.required,
    ]);
    this.dateInput= new FormControl();
    this.placeInput= new FormControl();
    this.dateInput.setValue("");
    this.placeInput.setValue("");

    this.createEventForm = this.builder.group({  
      eventTitle: this.eventTitle,  
      eventDescriptions: this.eventDescriptions, 
      eventPlaces: this.eventPlaces,
      eventDates: this.eventDates
    });
  }

  addPlace(){
    if(this.placeInput.value!=""){
      this.createEventData.eventPlaces.push(this.placeInput.value);
      this.placeInput.setValue("");
    }
  }
  deletePlace(index:number){
    this.createEventData.eventPlaces.splice(index,1)
  }
  addDate(){
    if(this.dateInput.value!=""){
      this.createEventData.eventDates.push(this.dateInput.value);
      this.dateInput.setValue("");
    }
  }
  deleteDate(index:number){
    this.createEventData.eventDates.splice(index,1)
  }

  back(){
    this.usrePageController.setSelectedGroup(undefined);
    this.router.navigate(["user/home"]);
  }
  create(){
    
  }
}
