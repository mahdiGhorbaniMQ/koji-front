import { Component, OnInit } from '@angular/core';
import { UserPageControllerService } from '../public/controller/user-page-controller.service';
import { UserPageInformationService } from '../public/information/user-page-information.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  constructor(private userPageContreoller:UserPageControllerService,
              public information:UserPageInformationService) { }

  ngOnInit(): void {
    this.checkWindowWidth()
  }
  checkWindowWidth(){
    if(window.innerWidth<=800){
      this.userPageContreoller.switchToBody();
    }
    else{
      this.userPageContreoller.switchToBothOfBodyAndNavBar();
    }
  }
  onResize(){
    this.checkWindowWidth()
  }
}
