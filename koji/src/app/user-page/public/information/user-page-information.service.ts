import { Injectable } from '@angular/core';
import { GroupModel } from '../../body/user-home/model/group-model';
import { StyleModel } from '../models/style-model';

@Injectable({
  providedIn: 'root'
})
export class UserPageInformationService {
  selectedGroup:GroupModel | undefined;
  headerStyle:StyleModel={};
  bodyStyle:StyleModel={};
  navBarStyle:StyleModel={};
  constructor() {
    this.headerStyle={};
    this.bodyStyle={};
    this.navBarStyle={};
  }
}
