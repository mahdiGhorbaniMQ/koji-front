import { Component, OnInit } from '@angular/core';
import { GroupModel } from '../../body/user-home/model/group-model';
import { UserPageControllerService } from '../../public/controller/user-page-controller.service';
import { UserPageInformationService } from '../../public/information/user-page-information.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private userPageController:UserPageControllerService,
              public userPageInformation:UserPageInformationService) { }
  ngOnInit(): void {
  }

}
