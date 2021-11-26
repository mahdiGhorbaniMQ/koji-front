import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPageInformationService } from 'src/app/public/information/user-page-information.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor(private router:Router,
              public userPageInformation:UserPageInformationService) { }

  ngOnInit(): void {
    this.router.navigate(["user/home"]);
  }

}
