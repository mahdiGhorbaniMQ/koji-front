import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserControllerService } from '../public/controller/user-controller.service';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsPageComponent implements OnInit {

  token?:string | null;
  email?:string | null;
  constructor(private router:Router,
              private userContrller:UserControllerService) { }
  ngOnInit(): void {
    this.token = localStorage.getItem("token")!;
    this.email = localStorage.getItem("email")!;
  }
  navigate(path:string){
    this.router.navigate([path]);
  }
}
