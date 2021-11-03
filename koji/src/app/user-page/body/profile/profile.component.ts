import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private usrePageController:UserPageControllerService,
              private router:Router) { }
  ngOnInit(): void {}

  back(){
    this.usrePageController.setSelectedGroup(undefined);
    this.router.navigate([""]);
  }

}
