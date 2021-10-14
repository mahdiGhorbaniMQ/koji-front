import { Injectable } from '@angular/core';
import { GroupModel } from '../model/group-model';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
  groups:GroupModel[]=[]
  constructor() {
    this.groups=[
      {
        name:"گروه 1"
      },
      {
        name:"گروه 2"
      },
      {
        name:"گروه 3"
      },
      {
        name:"گروه 4"
      },
      {
        name:"گروه 5"
      },
      {
        name:"گروه 6"
      },
      {
        name:"گروه 7"
      },
      {
        name:"گروه 8"
      },
    ]
  }
}
