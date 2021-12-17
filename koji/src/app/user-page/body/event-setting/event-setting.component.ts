import { ifStmt } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { EventApiService } from 'src/app/public/api-services/event-api.service';
import { UserControllerService } from 'src/app/public/controller/user-controller.service';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
import { UserInformationService } from 'src/app/public/information/user-information.service';
import { UserPageInformationService } from 'src/app/public/information/user-page-information.service';

@Component({
  selector: 'app-event-setting',
  templateUrl: './event-setting.component.html',
  styleUrls: ['./event-setting.component.scss']
})
export class EventSettingComponent implements OnInit {

  
  selectedItem:string="update";

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

  endSuccess:boolean=false;
  endError:boolean=false;

  isLoading:boolean=false;
  isEndLoading:boolean=false

  createEventData:any={
    eventTitle:"",
    eventDescriptions:"",
    eventPlaces:[],
    eventDates:[]
  }
  dateType:string="text";
  finalDate:String="";
  finalPlace:String="";
  
  topPlaces:{title:String,selected:boolean,users:any[]}[]=[];
  topDates:{title:String,selected:boolean,users:any[]}[]=[];

  constructor(private usrePageController:UserPageControllerService,
              private router:Router,
              private builder: FormBuilder,
              public userPageInformation:UserPageInformationService,
              private userInformation:UserInformationService,
              private eventApi: EventApiService,
              private userController:UserControllerService) { }
    ngOnInit(): void {
      this.generateFinalCondition();
      this.timeType= new FormControl(this.dateType, [
        Validators.required,
      ]);
      this.eventTitle= new FormControl(this.createEventData.eventTitle, [
        Validators.required,
        Validators.maxLength(40)
      ]);
      this.eventTitle.setValue(this.userPageInformation.selectedEvent?.title)
      this.eventDescriptions= new FormControl(this.createEventData.eventDescriptions,[
        Validators.maxLength(50)
      ]);
      this.eventDescriptions.setValue(this.userPageInformation.selectedEvent?.descriptions);
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
      this.createEventData.eventPlaces=this.userPageInformation.selectedEvent?.places;
      this.createEventData.eventDates=this.userPageInformation.selectedEvent?.dates;
    }
    generateFinalCondition(){
    
      var places= this.userInformation.selectedEventConditions.places;
      var dates= this.userInformation.selectedEventConditions.dates;

      if(dates.length>0){
        dates.forEach(date=>{
          if(this.topDates.length==0)
            this.topDates.push(date);
          else if(this.topDates[0].users.length<date.users.length){
            this.topDates=[date];
          }
          else if(this.topDates[0].users.length==date.users.length){
            this.topDates.push(date);
          }
        });
        this.topDates.forEach(date=>{
          date.selected=false;
          if(date.title==this.userPageInformation.selectedEvent?.finalDate){
            date.selected=true;
            this.finalDate=date.title;
          }
        })
        if(this.finalDate==""){
          this.topDates[0].selected=true;
          this.finalDate=this.topDates[0].title;
        }
      }
      if(places.length>0){
        places.forEach(place=>{
          if(this.topPlaces.length==0)
            this.topPlaces.push(place);
          else if(this.topPlaces[0].users.length<place.users.length){
            this.topPlaces=[place];
          }
          else if(this.topPlaces[0].users.length==place.users.length){
            this.topPlaces.push(place);
          }
        });

        this.topPlaces.forEach(place=>{
          place.selected=false;
          if(place.title==this.userPageInformation.selectedEvent?.finalPlace){
            place.selected=true;
            this.finalPlace=place.title;
          }
        })
        if(this.finalPlace==""){
          this.topPlaces[0].selected=true;
          this.finalPlace=this.topPlaces[0].title
        }
      }      
    }
    changeDateItemState(index:number){
      this.finalDate = this.topDates[index].title;
      this.topDates.forEach(date=>{
        date.selected=false;
      })
      this.topDates[index].selected=true;
    }
    changePlaceItemState(index:number){
      this.finalPlace = this.topPlaces[index].title;
      this.topPlaces.forEach(place=>{
        place.selected=false;
      })
      this.topPlaces[index].selected=true;
    }
    delete(){
      // this.eventApi
    }
    end(){
      this.isEndLoading=true;
      var eventData={
        finalDate: this.finalDate,
        finalPlace: this.finalPlace
      }
      if(eventData.finalDate=="") eventData.finalDate!=undefined
      if(eventData.finalPlace=="") eventData.finalPlace!=undefined
      this.eventApi.setFinalConditionByEventId(eventData,this.userPageInformation.selectedEvent!.id).subscribe(
        (response:any)=>{
          var dataForUpdate={
            groupId:this.userPageInformation.selectedEvent?.id!,
            title:this.userPageInformation.selectedEvent?.title!,
            descriptions: this.eventDescriptions.value!,
            dates:this.userPageInformation.selectedEvent?.dates!,
            places:this.userPageInformation.selectedEvent?.places!
          }
          this.eventApi.updateById(dataForUpdate,this.userPageInformation.selectedEvent!.id).subscribe(
            (upateResponse:any)=>{
              this.endSuccess=true;
              this.isEndLoading = false;
              this.endError = false;
              this.userPageInformation.selectedEvent = upateResponse;
              setTimeout(() => {
                this.back();
              }, 1500);
            },
            error=>{
              this.endError = true;
              this.isEndLoading = false;
              this.endSuccess = false;
            }
          );
        },
        error=>{
          this.endError=true;
          this.isEndLoading = false;
          this.endSuccess = false;
        }
      );
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
    update(){
      this.isLoading = true;
      var eventData = {
        title: this.eventTitle.value,
        descriptions: "",
        places: this.createEventData.eventPlaces,
        dates: this.createEventData.eventDates,
        groupId: "",
      };
      this.eventApi.updateById(eventData,this.userPageInformation.selectedEvent?.id!).subscribe(
          (response:any)=>{
          this.isLoading = false;
          this.createSuccess = true;
          this.createError = false;
          this.userPageInformation.selectedEvent = response;

          setTimeout(() => {
            this.back();
          }, 1500);
        },
        (error:any)=>{
          this.isLoading = false;
          this.createSuccess = false;
          this.createError = true;
        }
      );
    }
    back(){
      this.router.navigate(["user/group/event"]);
    }
}
