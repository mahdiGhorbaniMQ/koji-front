import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPageControllerService } from 'src/app/public/controller/user-page-controller.service';

@Component({
  selector: 'app-callender',
  templateUrl: './callender.component.html',
  styleUrls: ['./callender.component.scss']
})
export class CallenderComponent implements OnInit {

  constructor(private usrePageController:UserPageControllerService,
              private router:Router) { }
  ngOnInit(): void {}
  
  back(){
    this.usrePageController.setSelectedGroup(undefined);
    this.router.navigate([""]);
  }
}
