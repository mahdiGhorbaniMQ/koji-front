import { Component, OnInit } from '@angular/core';
import { UserPageControllerService } from 'src/app/user-page/public/controller/user-page-controller.service';
import { GroupModel } from '../../user-home/model/group-model';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  selectedGroup!:GroupModel;
  constructor(private usrePageController:UserPageControllerService) { }
  ngOnInit(): void {
    this.selectedGroup=this.usrePageController.getSelectedGroup()!;
  }

}
