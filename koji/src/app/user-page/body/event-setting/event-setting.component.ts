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

  isLoading:boolean=false;

  createEventData:any={
    eventTitle:"",
    eventDescriptions:"",
    eventPlaces:[],
    eventDates:[]
  }
  dateType:string="text";
  finalDate:String="";
  finalPlace:String="";

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
      this.createEventData.eventPlaces=this.userPageInformation.selectedEvent?.places;
      this.createEventData.eventDates=this.userPageInformation.selectedEvent?.dates;
    }
    generateFinalCondition(){
    
      // var dates=this.userPageInformation.selectedEvent?.dates!;
      // var places=this.userPageInformation.selectedEvent?.places!;
      // var placesScore:Map<String,number>;
      // var datesScore:Map<String,number>;
      
      // dates.forEach(item => {
      //   var score = datesScore.get(item);
      //   if(score)
      //     datesScore.set(item,score+1);
      //   else
      //     datesScore.set(item,1);
      // });
      // places.forEach(item => {
      //   var score = placesScore.get(item);
      //   if(score)
      //     placesScore.set(item,score+1);
      //   else
      //     placesScore.set(item,1);
      // });
      // var topPlaces:String[]=[];
      // var topDates:String[]=[];
      // dates.forEach(item=>{
      //   if(datesScore.has(item)){
      //       var score = datesScore.get(item);
      //       if(topDates.length>0){
              
      //         if((datesScore.get(topDates[0])!)<score!){
      //           topDates = [item];
      //         }
      //         else if((datesScore.get(topDates[0])!)==score!){
      //           topDates.push(item);
      //         }
      //       }
      //       else{
      //         topDates.push(item)
      //       }
      //     }
      // });
      // places.forEach(item=>{
      //     if(placesScore.has(item)){

      //       var score = placesScore.get(item);
      //       if(topPlaces.length>0){
      //         if((placesScore.get(topPlaces[0])!)<score!){
      //           topPlaces = [item];
      //         }
      //         else if((placesScore.get(topPlaces[0])!)==score!){
      //           topPlaces.push(item);
      //         }
      //       }
      //       else{
      //         topPlaces.push(item)
      //       }
      //     }
      //   });
      //   console.log(topPlaces,topDates)
      //   console.log(placesScore!,datesScore!)
        
    }
    delete(){
      // this.eventApi
    }
    end(){

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
        descriptions: this.eventDescriptions.value,
        places: this.createEventData.eventPlaces,
        dates: this.createEventData.eventDates,
        groupId: "",
      };
      this.eventApi.updateById(eventData,this.userPageInformation.selectedEvent?.id!).subscribe(
          (response:any)=>{
          this.isLoading = false;
          this.createSuccess = true;
          this.createError = false;
          console.log(response)
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
