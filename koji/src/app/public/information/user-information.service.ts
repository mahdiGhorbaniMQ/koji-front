import { Injectable } from '@angular/core';
import { ConditionModel } from '../models/condition-model';
import { EventModel } from '../models/event-model';
import { GroupModel } from '../models/group-model';
import { GroupProfileModel } from '../models/group-profile-model';
import { UserModel } from '../models/user-model';
import { UserProfileModel } from '../models/user-profile-model';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
  userData:UserModel={firstName:"",lastName:"",email:"",username:"",groups:[]};
  groups:Map<String,GroupModel>=new Map();
  events:Map<String,EventModel>=new Map();
  conditions:ConditionModel[]=[];

  userProfile?:UserProfileModel;
  groupProfile?:GroupProfileModel;
  constructor() {
  }
}
