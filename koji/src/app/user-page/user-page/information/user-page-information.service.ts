import { Injectable } from '@angular/core';
import { StyleModel } from '../../public/models/style-model';

@Injectable({
  providedIn: 'root'
})
export class UserPageInformationService {  
  headerStyle:StyleModel={};
  bodyStyle:StyleModel={};
  navBarStyle:StyleModel={};
  constructor() {
    this.headerStyle={};
    this.bodyStyle={};
    this.navBarStyle={};
  }
}
