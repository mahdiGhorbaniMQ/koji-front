import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventApiService } from 'src/app/public/api-services/event-api.service';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
import { UserInformationService } from 'src/app/public/information/user-information.service';
import { UserPageInformationService } from 'src/app/public/information/user-page-information.service';
import { EventModel } from 'src/app/public/models/event-model';
import { GroupModel } from 'src/app/public/models/group-model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  providers:[HttpClient]
})
export class GroupComponent implements OnInit {

  selectedGroup!:GroupModel;
  groupEvents:Map<String,EventModel>=new Map();
  constructor(private usrePageController:UserPageControllerService,
              private router:Router,
              public userPageInformation:UserPageInformationService,
              private userInformation:UserInformationService,
              private eventApi:EventApiService) { }
  ngOnInit(): void {
    this.selectedGroup = this.usrePageController.getSelectedGroup()!;
    this.userInformation.events = new Map();
    this.userInformation.conditions = [];
    this.groupEvents = this.userInformation.events;
    this.selectedGroup.events.forEach(eventId => {
      this.eventApi.getDetailsByEventId(eventId).subscribe(
        (response:any)=>{       
          this.userInformation.events.set(response.id,{
            title:          response.title,
            descriptions:   response.descriptions,
            places:         response.places,
            dates:          response.dates,
            finalDate:      response.fainalDate,
            finalPlace:     response.finalPlace,
            owner:          response.owner,
            id:             response.id,
          });
        },
        error=>{}
      )
    });
    this.groupEvents = this.userInformation.events;
  }
  showEvent(event:EventModel){
    this.usrePageController.setSelectedEvent(event)
    this.router.navigate(["user/group/event"]);
  }
  back(){
    this.usrePageController.setSelectedGroup(undefined);
    this.router.navigate(["/user/home"]);
  }
  navigate(endPoint:string){
    this.router.navigate([endPoint]);
  }
}
