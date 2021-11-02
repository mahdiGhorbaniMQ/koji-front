import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';
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
  constructor(private usrePageController:UserPageControllerService,
              private router:Router) { }
  ngOnInit(): void {
    this.selectedGroup=this.usrePageController.getSelectedGroup()!;
  }
  showEvent(event:EventModel){
    this.usrePageController.setSelectedEvent(event)
    this.router.navigate(["user/group/event"]);
  }
  back(){
    this.usrePageController.setSelectedGroup(undefined);
    this.router.navigate(["/user/home"]);
  }
}
