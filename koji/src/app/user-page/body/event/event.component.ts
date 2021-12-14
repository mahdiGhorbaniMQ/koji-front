import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ConditionApiService } from 'src/app/public/api-services/condition-api.service';
import { EventApiService } from 'src/app/public/api-services/event-api.service';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
import { UserInformationService } from 'src/app/public/information/user-information.service';
import { UserPageInformationService } from 'src/app/public/information/user-page-information.service';
import { ConditionModel } from 'src/app/public/models/condition-model';
import { EventModel } from 'src/app/public/models/event-model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  
  selectedEvent!:EventModel;
  selectedItem:string="user";

  conditionData!:ConditionModel;
  
  placeInput:string="";
  dateInput:string="";

  state!:FormControl;

  places:{title:String,selected:boolean,users:any[]}[]=[];
  dates:{title:String,selected:boolean,users:any[]}[]=[];

  userCondition:any = {
    places:[],
    dates:[]
  }; 

  userVote = "null";

  submitStatus = false;

  constructor(private userPageController:UserPageControllerService,
              public userPageInformation:UserPageInformationService,
              public userInformation:UserInformationService,
              private eventApi:EventApiService,
              private router:Router,
              private conditionApi:ConditionApiService) { }

  ngOnInit(): void {
    this.state = new FormControl();
    this.state.setValue("1")
    this.selectedEvent = this.userPageController.getSelectedEvent()!;
    this.userInformation.conditions = [];
    this.eventApi.getVotesByEventId(this.selectedEvent.id).subscribe(
      (response:any)=>{
        this.selectedEvent.agreements=response.agrees;
        this.selectedEvent.disagreements=response.disagrees;
        this.setUserVote();
      },
      error=>{}
    );
    this.conditionApi.getAllConditionsByEventId(this.selectedEvent.id).subscribe(
      (response:ConditionModel[])=>{
        this.userInformation.conditions=response;
        this.conditionApi.getOneCondition(this.selectedEvent.id,localStorage.getItem("username")!).subscribe(
          (response:any)=>{
            this.userCondition.dates = response.dates;
            this.userCondition.places = response.places;
            this.state.setValue(response.state)
            this.setEventCondition()
          },
          error=>{this.setEventCondition()}
        );
      },
      error=>{}
    );
    
  }
  changeState(){
    if(this.state.value!=2){
      this.dates.forEach(item=>{
        item.selected=false;
      })
      this.places.forEach(item=>{
        item.selected=false;
      });
    }
    else{
      this.dates.forEach(item=>{
        item.selected=true;
      })
      this.places.forEach(item=>{
        item.selected=true;
      });
    }
  }
  setEventCondition(){
    this.places=[];
    this.dates=[];
    this.selectedEvent.places.forEach(item=>{
      var place:any = {
        title: item,
        selected:false,
        users:[]
      }
      this.userInformation.conditions.forEach(condition=>{
        if(this.hasItem(item,condition.places)){
          place.users.push(condition);
        }
      });
      place.selected = this.hasItem(item,this.userCondition.places); 
      this.places.push(place);
    });
    this.selectedEvent.dates.forEach(item=>{
      var date:any = {
        title: item,
        selected:false,
        users:[]
      }
      this.userInformation.conditions.forEach(condition=>{
        if(this.hasItem(item,condition.dates)){
          date.users.push(condition);
        }
      });
      date.selected = this.hasItem(item,this.userCondition.dates);

      this.dates.push(date);
    });
  }
  setUserVote(){
    this.selectedEvent.agreements?.forEach(profile=>{
      if(profile.username==this.userInformation.userData?.username)
        this.userVote="true";
    })
    this.selectedEvent.disagreements?.forEach(profile=>{
      if(profile.username==this.userInformation.userData?.username)
        this.userVote="false";
    })
  }
  hasItem(item:any,arr:any[]):boolean{
    for(var i=0;i<arr.length;i++){

      if(arr[i]==item){
        return true;
      }
    }
    return false;
  }
  changeDateItemState(index:number){
    this.dates[index].selected=!this.dates[index].selected;
  }
  changePlaceItemState(index:number){
    this.places[index].selected=!this.places[index].selected;
  }
  setUserConditions(){
    this.submitStatus=true;
    var condition:{ places:String[],dates:String[] ,state:number} = {
      dates:[],
      places:[],
      state:this.state.value
    };
    this.places.forEach((item:any)=>{
      if(item.selected)
        condition.places.push(item.title);
    });
    this.dates.forEach((item:any)=>{
      if(item.selected)
        condition.dates.push(item.title);
    });
    this.conditionApi.setConditionById(condition,this.selectedEvent.id).subscribe(
      (response:any)=>{
        this.conditionApi.getAllConditionsByEventId(this.selectedEvent.id).subscribe(
          (response:ConditionModel[])=>{
            this.userInformation.conditions=response;     
            this.submitStatus=false;
            this.selectedItem='all';
            this.conditionApi.getAllConditionsByEventId(this.selectedEvent.id).subscribe(
              (response:ConditionModel[])=>{
                this.userInformation.conditions=response;
                this.conditionApi.getOneCondition(this.selectedEvent.id,localStorage.getItem("username")!).subscribe(
                  (response:any)=>{
                    this.userCondition.dates = response.dates;
                    this.userCondition.places = response.places;
                    this.setEventCondition()
                  },
                  error=>{this.setEventCondition()}
                );
              },
              error=>{}
            );
          },
          error=>{}
        );
      },
      error=>{}
    );
  }
  setVote(){
    if(this.userVote=="true"){
      this.agree();
    }
    else if(this.userVote=="false"){
      this.disagree();
    }
    else if(this.userVote=="null"){
      this.retractVote()
    }
  }
  retractVote(){
    this.eventApi.retractVoteByEventId(this.selectedEvent.id).subscribe(
      (response:any)=>{
        this.eventApi.getVotesByEventId(this.selectedEvent.id).subscribe(
          (data:any)=>{
            this.selectedEvent.agreements=data.agrees;
            this.selectedEvent.disagreements=data.disagrees;
          }
        );
      }
    );
  }
  agree(){
    this.eventApi.setAgreementByEventId(this.selectedEvent.id).subscribe(
      (response:any)=>{
        this.eventApi.getVotesByEventId(this.selectedEvent.id).subscribe(
          (data:any)=>{
            this.selectedEvent.agreements=data.agrees;
            this.selectedEvent.disagreements=data.disagrees;
          },
        );
      }
    );
  }
  disagree(){
    this.eventApi.setDisagreementByEventId(this.selectedEvent.id).subscribe(
      (response:any)=>{
        this.eventApi.getVotesByEventId(this.selectedEvent.id).subscribe(
          (data:any)=>{
            this.selectedEvent.agreements=data.agrees;
            this.selectedEvent.disagreements=data.disagrees;
          },
        );
      }
    );
  }

  back(){
    this.router.navigate(["user/group"])
  }
  navigate(endpoint:string){
    this.router.navigate([endpoint]);
  }
}
