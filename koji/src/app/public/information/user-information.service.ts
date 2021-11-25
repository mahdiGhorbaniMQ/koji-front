import { Injectable } from '@angular/core';
import { GroupModel } from '../models/group-model';
import { UserModel } from '../models/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {
  userData:UserModel={name:"",email:"",password:"",groups:[]};
  constructor() {
  }
}
