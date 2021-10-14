import { Injectable } from '@angular/core';
import { UserInformationService } from '../information/user-information.service';
import { GroupModel } from '../model/group-model';

@Injectable({
  providedIn: 'root'
})
export class UserInofrmationControllerService {

  constructor(private information:UserInformationService) { }
  getUserGroups():GroupModel[]{
    return this.information.groups;
  }
}
