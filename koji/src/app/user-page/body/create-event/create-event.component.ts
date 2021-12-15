import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventApiService } from 'src/app/public/api-services/event-api.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { UserControllerService } from 'src/app/public/controller/user-controller.service';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
import { UserPageInformationService } from 'src/app/public/information/user-page-information.service';
import { UserInformationService } from 'src/app/public/information/user-information.service';
import { GroupModel } from 'src/app/public/models/group-model';

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
  timeType!:FormControl;

  createSuccess:boolean=false;
  createError:boolean=false;

  isLoading:boolean=false;

  createEventData={
    eventTitle:"",
    eventDescriptions:"",
    eventPlaces:new Array<string>(),
    eventDates:new Array<string>()
  }
  dateType:string="text";

  groupList:any[] = [];
  selectedGroups:any[] = [];
  groupSettings:IDropdownSettings = {};
  groupIds:String[]=[];
  constructor(private usrePageController:UserPageControllerService,
              private router:Router,
              private builder: FormBuilder,
              public userPageInformation:UserPageInformationService,
              private userInformation:UserInformationService,
              private eventApi: EventApiService,
              private userController:UserControllerService) { }
  ngOnInit(): void {

    this.userInformation.groups.forEach(item=>{
      this.groupList.push(item);
    });
    this.groupSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };


    this.timeType= new FormControl(this.dateType, [
      Validators.required,
    ]);
    this.eventTitle= new FormControl(this.createEventData.eventTitle, [
      Validators.required,
      Validators.maxLength(40)
    ]);
    this.eventDescriptions= new FormControl(this.createEventData.eventDescriptions,[
      Validators.maxLength(50)
    ]);
    this.eventDescriptions.setValue("");
    this.eventPlaces= new FormControl(this.createEventData.eventPlaces);
    this.eventDates= new FormControl(this.createEventData.eventDates);

    this.dateInput= new FormControl();
    this.placeInput= new FormControl();
    this.dateInput.setValue("");
    this.placeInput.setValue("");

    this.createEventForm = this.builder.group({  
      eventTitle: this.eventTitle,  
      eventDescriptions: this.eventDescriptions,
      dates: this.dateInput,
      places: this.placeInput,
      dateType: this.dateType
    });
  }
  onGroupSelect(group: any) {
    this.groupIds.push(group.id);
  }
  onSelectAll(groups:any) {
    this.groupIds=groups.map((item:any)=>item.id);
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
    this.isLoading = true;
    var eventData = {
      title: this.eventTitle.value,
      descriptions: this.eventDescriptions.value,
      places: this.eventPlaces.value,
      dates: this.eventDates.value,
      groupId: this.groupIds[0],
    };
    this.groupIds.splice(0,1);

    this.eventApi.create(eventData).subscribe(
      (response:any)=>{
        this.isLoading = false;
        this.createSuccess = true;
        this.createError = false;
        setTimeout(() => {
          this.goHome();
        }, 1500);

        this.groupIds.forEach(groupId=>{
          this.eventApi.addToGroup(response.id,groupId).subscribe(
            (response:any)=>{},
            error=>{}
          );
        })
      },
      (error:any)=>{
        this.isLoading = false;
        this.createSuccess = false;
        this.createError = true;
      }
    );
  }
  goHome(){
    this.router.navigate(["/user/home"]);
  }
}
